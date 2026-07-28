#Requires -Version 7
<#
.SYNOPSIS
  Založí nový projekt z této šablony se zachovanou git historií a vazbou na rodiče.
.EXAMPLE
  scripts/new-project.ps1 -Name muj-web
  scripts/new-project.ps1 -Name muj-web -Dest C:\_dev -TemplateUrl https://github.com/user/project-template
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory)][string]$Name,
  [string]$Dest = 'C:\_dev',
  [string]$TemplateUrl
)
$ErrorActionPreference = 'Stop'

# Kořen šablony = rodič složky scripts/
$TemplateRoot = Split-Path -Parent $PSScriptRoot
$Target = Join-Path $Dest $Name

if (Test-Path $Target) { throw "Cíl už existuje: $Target" }

# URL šablony: z parametru, jinak z remote 'origin' šablony
if (-not $TemplateUrl) {
  $TemplateUrl = (git -C $TemplateRoot remote get-url origin 2>$null)
  if (-not $TemplateUrl) { $TemplateUrl = $TemplateRoot }
}

Write-Host "→ Klonuji šablonu do $Target (historie zachována)" -ForegroundColor Cyan
git clone $TemplateRoot $Target | Out-Null
Set-Location $Target

# Remote 'template' míří na rodiče; 'origin' si nastavíš na svůj repozitář později.
git remote remove origin 2>$null
git remote add template $TemplateUrl

# Lineage marker
$sha = (git -C $Target rev-parse HEAD).Trim()
$today = (Get-Date -Format 'yyyy-MM-dd')
@"
{
  "template": "$TemplateUrl",
  "ref": "$sha",
  "created": "$today"
}
"@ | Set-Content -Path (Join-Path $Target '.template-version') -Encoding utf8

# Placeholdery
foreach ($f in @('AGENTS.md', 'README.md')) {
  $p = Join-Path $Target $f
  if (Test-Path $p) {
    (Get-Content $p -Raw) -replace '\{\{PROJECT_NAME\}\}', $Name | Set-Content $p -Encoding utf8
  }
}

# Verzionovaný commit workflow
git config core.hooksPath .githooks
git config commit.template .gitmessage

Write-Host ""
Write-Host "✓ Hotovo: $Target" -ForegroundColor Green
Write-Host "  Zbývá:" -ForegroundColor Yellow
Write-Host "   1. Vyplň TODO placeholdery v AGENTS.md (Projektový kontext, Zakázáno…)."
Write-Host "   2. Nastav vlastní origin:  git remote add origin <url-tveho-repa>"
Write-Host "   3. Uprav .mcp.json / .codex/config.toml podle stacku."
Write-Host "   4. Commitni atomicky:  git add <relevantni-cesty>  # nebo git add -p"
Write-Host ""
Write-Host "  Remote 'template' zůstává napojený — novinky ze šablony: scripts/template-update.ps1"
