# DashLord

Tableau de bord des données brutes issues de plusieurs outils qui évaluent une URL et les repositories associés

L'acquisition des données ainsi que la génération du rapport sont automatisés par des [GitHub actions](https://github.com/features/actions)

Démo : https://socialgouv.github.io/dnum-dashboard

## Usage

Pour déployer votre version de DashLord :

- Créer un nouveau repository [**à partir du template dashlord**](https://github.com/SocialGouv/dashlord)
- Éditer le fichier `dashlord.yml`
- Éditer le fichier `scans.yml`
- Lancer `DashLord scans` dans l'onglet `Actions` de votre projet GitHub

Une fois les scans terminés, un rapport sera généré dans la branche `gh-pages` du repository. Vous devez aller dans l'onglet `Settings` du repository pour activer la fonctionnalité "GitHub Pages" et choisir la source `gh-pages`. Ceci permet de publier le rapport sur `https://[organisation].github.io/[repository]` (publiquement).

### GitHub actions

- Le workflow `DashLord scans` permet de lancer un scan sur les URLs, il est executé lors d'un changement dans le fichier `dashlord.yml`
- Le workflow `DashLord report` est lancé à la fin de chaque `DashLord scans` et produit le rapport sous forme de site web.

Ces workflows sont également déclenchables manuellement dans l'onglet "Actions"

## Customisation

- Le fichier [`dashlord.yml`](./dashlord.yml) permet de paramétrer les urls et quelques options du tableau de bord
- Le workflow [`scans.yml`](./github/workflows/scans.yml) permet d'activer/désactiver certains scanners
- Le workflow [`report.yml`](./github/workflows/report.yml) permet de modifier le rapport généré en se basant sur [SocialGouv/dashlord-report-action](https://github.com/SocialGouv/dashlord-report-action).

### dashlord.yml

```yml
title: Dashboard title
# `tools` allows to activate only some of the tools in the report
tools:
  - lighthouse
  - testssl
  - updownio
urls:
  - url: https://www.free.fr
    title: Homepage free.fr
    tags:
      - telecom
      - provider
    repositories:
      - free/free-ui
      - free/free-css
  - url: https://www.lemonde.fr
    title: Homepage lemonde.fr
    tags:
      - presse
```

## Outils

Chaque outil peut être activé/désactivé dans le rapport avec la clé `tools` de dashlord.yaml. Les outils dans le fichier `scans.yaml` doivent refléter cette configuration.

| id           | outil                                                                                                                          | description                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| lighthouse   | [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)                                                        | Audit automatique de page web (best-practices a11y, webperf, seo...)  |
| zap          | [OWASP Zed Attack Proxy](https://www.zaproxy.org/docs/docker/baseline-scan)                                                    | Scan de vulnérabilités passif "baseline"                              |
| testssl      | [testssl.sh](https://testssl.sh)                                                                                               | Évaluation du niveau de confiance d'un certificat SSL                 |
| http         | [Mozilla HTTP observatory](https://www.zaproxy.org/docs/docker/baseline-scan)                                                  | Évalue le niveau de qualité/sécurité de la page web et de son serveur |
| thirdparties | [Third parties](https://github.com/SocialGouv/thirdparties)                                                                    | Liste tous les cookies et scripts externes                            |
| -            | [GeoIP2](https://www.maxmind.com/en/geoip-demo)                                                                                | Géolocalisation des ressources de la page web                         |
| nuclei       | [Nuclei](https://nuclei.projectdiscovery.io)                                                                                   | Détection d'erreurs de configuration courantes                        |
| wappalyzer   | [Wappalyzer](https://www.wappalyzer.com)                                                                                       | Détection des technologies web, Javascript, CMS, outillage...         |
| updownio     | [UpDown.io](https://www.updown.io)                                                                                             | Monitoring d'uptime et performance                                    |
| dependabot   | [Dependabot security alerts](https://docs.github.com/en/code-security/supply-chain-security/about-dependabot-security-updates) | Alertes de vulnerabilités                                             |

## Contribute

Vous pouvez contribuer en remontant des issues de qualité, en améliorant la documentation, ou en ajoutant du code.

🤗 Toutes les suggestions sont bienvenues.

cf [CONTRIBUTING.md](./CONTRIBUTING.md)

### Dev

DashLord fonctionne en deux étapes :

1. **Acquisition des données** : Pour chaque URL, chaque outil est executé et génère un fichier JSON qui sera versionné dans le repository
2. **Génération du rapport** : À partir des données existantes, l'action [dashlord-report-action](https://github.com/SocialGouv/dashlord-report-action) aggrège, compresse les résultats et produit un rapport web statique.

### Related repos

| Repo                                                                                        | desc                                                       |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [SocialGouv/dashlord-report-action](https://github.com/SocialGouv/dashlord-report-action)   | action to aggregate scanners data and produce a web report |
| [SocialGouv/dashlord-nuclei-action](https://github.com/SocialGouv/dashlord-nuclei-action)   | Dump nuclei result                                         |
| [SocialGouv/dashlord-httpobs-action](https://github.com/SocialGouv/dashlord-httpobs-action) | Dump Mozilla HTTP Observatory result                       |
| [SocialGouv/thirdparties-action](https://github.com/SocialGouv/thirdparties-action)         | Dump third party scripts scan result                       |
| [SocialGouv/wappalyzer-action](https://github.com/SocialGouv/wappalyzer-action)             | Dump Wappalyzer scan result                                |
| [MTES-MCT/dependabotalerts-action](https://github.com/MTES-MCT/dependabotalerts-action)     | Dump Github dependabot security alerts                     |
| [MTES-MCT/updownio-action](https://github.com/MTES-MCT/updownio-action)                     | Dump updown.io stats                                       |
| [SocialGouv/thirdparties](https://github.com/SocialGouv/thirdparties)                       | thirdparty scripts database                                |
| [SocialGouv/dashlord-init-action](https://github.com/SocialGouv/dashlord-report-action)     | action that parse the configuration for a job matrix       |
| [SocialGouv/dashlord-save-action](https://github.com/SocialGouv/dashlord-save-action)       | aggregate all scanners data and saves it locally           |

### Ajouter un scanner

1. Créer une action github qui produit un JSON (cf exemple ci-dessus)
2. Ajouter le support pour ce type de données dans [dashlord-report-action repo](https://github.com/SocialGouv/dashlord-report-action)
