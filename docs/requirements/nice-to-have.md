# Nice-to-have (mimo rozsah)

Nápady, které stojí za zvážení později. **Nic z toho není součást aktuálního rozsahu.**

## Automatický update potomků ze šablony (cookiecutter + cruft / copier)

**Stav: out of scope.** Šablona jede git-native (remote `template` + `.template-version`,
viz [`../../TEMPLATE.md`](../../TEMPLATE.md)). Novinky se do projektů tahají ručně přes
`git merge template/main`. To pro pár projektů stačí a nevnáší nový toolchain.

Kdyby projektů přibylo a ruční merge přestal škálovat, průmyslový standard je
**šablona s placeholdery + nástroj, který umí `update` existujících projektů**:

| Nástroj | Vytvoření | Update existujícího projektu | Poznámka |
|---|---|---|---|
| **cookiecutter** | ✅ `{{cookiecutter.x}}` | ❌ jen při zakládání | sám o sobě nestačí |
| **cruft** | ✅ (nad cookiecutter) | ✅ `cruft update` (dle SHA v `.cruft.json`) | plně kompatibilní s cookiecutter šablonami, git-based diff |
| **copier** | ✅ `{{ x }}` (Jinja) | ✅ `copier update` | modernější, lepší řešení konfliktů; pro update existujících projektů dnes doporučovaná volba |

Jak to funguje (cruft i copier): potomek si drží soubor s odkazem na šablonu a commit,
ze kterého vznikl; `update` spočítá diff proti aktuální šabloně, nechá ho projít revizí
a zmerguje. `cruft check` / CI umí hlídat, že projekt neztratil krok se šablonou;
lze zautomatizovat GitHub Action, která periodicky otevře PR s novinkami.

**Cena přechodu:** otemplátování souborů do `{{ }}` placeholderů a Python toolchain
(`pipx install copier` / `cruft`). Backport směr (projekt → šablona) zůstává manuální
i u těchto nástrojů — automatizuje se jen směr šablona → projekt.

**Doporučení, až/pokud to přijde na řadu:** copier (novější, lepší merge konfliktů).
Migrace z git-native je přímočará — placeholdery a `copier.yml` se doplní, historie
zůstává.

Zdroje:
- [cruft — dokumentace](https://cruft.github.io/cruft/)
- [cruft/cruft (GitHub)](https://github.com/cruft/cruft)
- [Copier vs Cookiecutter (DEV)](https://dev.to/cloudnative_eng/copier-vs-cookiecutter-1jno)
- [Cruft vs copier — Blenddata](https://www.blenddata.nl/en/blogs/cruft-vs-copier-automating-template-updates-at-scale)
