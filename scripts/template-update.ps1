#Requires -Version 7
<#
.SYNOPSIS
  Stáhne novinky ze šablony a ukáže diff. Spouštěj v POTOMKOVI (má remote 'template').
.DESCRIPTION
  Sám nemerguje — po náhledu spusť `git merge template/main` a přepiš 'ref'
  v .template-version na nové SHA. Viz TEMPLATE.md.
#>
[CmdletBinding()]
param()
$ErrorActionPreference = 'Stop'

if (-not (git remote | Select-String -Quiet '^template$')) {
  throw "Chybí remote 'template'. Tenhle skript patří do projektu vzniklého ze šablony."
}

Write-Host "→ git fetch template" -ForegroundColor Cyan
git fetch template

$scaffold = @('AGENTS.md', 'CLAUDE.md', '.githooks', '.gitmessage', '.gitignore', '.claude', 'scripts', 'TEMPLATE.md')
Write-Host ""
Write-Host "Rozdíl scaffoldu proti template/main:" -ForegroundColor Cyan
git --no-pager diff --stat template/main -- @scaffold

Write-Host ""
Write-Host "Náhled celého diffu:" -ForegroundColor Yellow
Write-Host "   git diff template/main -- $($scaffold -join ' ')"
Write-Host ""
Write-Host "Merge novinek:" -ForegroundColor Yellow
Write-Host "   git merge template/main"
Write-Host "   # pak přepiš 'ref' v .template-version na: $((git rev-parse template/main).Trim())"
