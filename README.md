# DashLord

Tableau de bord des bonnes pratiques techniques

L'acquisition des données ainsi que la génération du rapport sont automatisés par des [GitHub actions](https://github.com/features/actions)

Exemples :

- https://dashlord.incubateur.net
- https://socialgouv.github.io/dashlord-fabrique
- https://mtes-mct.github.io/dashlord
- https://socialgouv.github.io/dnum-dashboard

> ⚠️ DashLord utilise le [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/) et s'adresse donc **uniquement** aux développeurs et aux concepteurs, qu'ils soient agents publics ou prestataires pour des sites Internet de l'État. cf [conditions d'utilisation](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/perimetre-d-application)

## Usage

Pour déployer votre version de DashLord :

- Créer un nouveau repository [**à partir du template dashlord**](https://github.com/SocialGouv/dashlord)
- Éditer le fichier `dashlord.yml`
- Éditer le fichier `.github/workflows/scans.yml` si nécessaire
- Éditer le fichier `.github/workflows/report.yml` si nécessaire (vérifier le `base-path` où sera publié le site web, il s'agira du nom du repository)
- Dans les settings du repository, dans "Actions", positionner "Workflows permissions" sur "Read and write"
- Dans les settings du repository, dans "Pages", selectionner `gh-pages` comme branche source
- Lancer `DashLord scans` dans l'onglet `Actions` de votre projet GitHub

Une fois les scans terminés, un rapport sera généré dans la branche `gh-pages` du repository, il sera disponible sur `https://[organisation].github.io/[repository]` (publiquement).

### GitHub actions

- Le workflow `DashLord scans` permet de lancer un scan sur les URLs, il est executé lors d'un changement dans le fichier `dashlord.yml`
- Le workflow `DashLord report` est lancé à la fin de chaque `DashLord scans` et produit le rapport sous forme de site web.

Ces workflows sont également déclenchables manuellement dans l'onglet "Actions"

## Customisation

- Le fichier [`dashlord.yml`](./dashlord.yml) permet de paramétrer les urls et quelques options du tableau de bord
- Le workflow [`.github/workflows/scans.yml`](./.github/workflows/scans.yml) permet de customiser certains scanners, et régler la fréquence de scan (paramètre `schedule` positionné par défaut tous les dimanches à minuit)
- Le workflow [`.github/workflows/report.yml`](./.github/workflows/report.yml) permet de générer le rapport web en se basant sur [SocialGouv/dashlord-actions/report](https://github.com/SocialGouv/dashlord-actions).

### dashlord.yml

💡 Bonne pratique : enlever les slashs à la fin des urls

```yml
title: Dashboard title
description: Bonnes pratiques techniques
entity: Ministères sociaux
footer: Powered by SocialGouv
# `tools` allows to activate only some of the tools in the report
tools:
  404: true
  screenshot: true
  nmap: true
  zap: true
  wappalyzer: true
  http: true
  testssl: true
  lighthouse: true
  thirdparties: true
  nuclei: false
  updownio: true
  dependabot: true
  codescan: true
  stats: true
  declaration-a11y: true
  trivy: true
  ecoindex: true
  sonarcloud: true
urls:
  - url: https://www.free.fr
    title: Homepage free.fr
    tags:
      - telecom
      - provider
    repositories: # pour récupérer les alertes de sécu de ces repos
      - free/free-ui
      - free/free-css
    docker: # pour scanner les images avec trivy
      - ghcr.io/socialgouv/fabrique/frontend
      - ghcr.io/socialgouv/fabrique/backend
    tools: # pour desactiver certains outils
      nmap: false
    pages: # pour lancer lighthouse sur des pages supplémentaires
      - /profil
      - /mentions
  - url: https://www.lemonde.fr
    title: Homepage lemonde.fr
    tags:
      - presse
```



## Outils

Chaque outil peut être activé/désactivé dans le rapport avec la clé `tools` de dashlord.yml.

| Repo                                                                                      | desc                                   |
| ----------------------------------------------------------------------------------------- | -------------------------------------- |
| [SocialGouv/dashlord-actions](https://github.com/SocialGouv/dashlord-actions)             | Dashlord specific actions              |
| [SocialGouv/dashlord-nuclei-action](https://github.com/SocialGouv/dashlord-nuclei-action) | Dump nuclei result                     |
| [SocialGouv/httpobs-action](https://github.com/SocialGouv/httpobs-action)                 | Dump Mozilla HTTP Observatory result   |
| [SocialGouv/thirdparties-action](https://github.com/SocialGouv/thirdparties-action)       | Dump third party scripts scan result   |
| [SocialGouv/wappalyzer-action](https://github.com/SocialGouv/wappalyzer-action)           | Dump Wappalyzer scan result            |
| [MTES-MCT/dependabotalerts-action](https://github.com/MTES-MCT/dependabotalerts-action)   | Dump Github dependabot security alerts |
| [MTES-MCT/codescanalerts-action](https://github.com/MTES-MCT/codescanalerts-action)       | Dump Github CodeQL security alerts     |
| [MTES-MCT/updownio-action](https://github.com/MTES-MCT/updownio-action)                   | Dump updown.io stats                   |
| [MTES-MCT/nmap-action](https://github.com/MTES-MCT/nmap-action)                           | Dump nmap port scan stats              |
| [MTES-MCT/stats-action](https://github.com/MTES-MCT/stats-action)                         | Detect /stats page.                    |
| [SocialGouv/thirdparties](https://github.com/SocialGouv/thirdparties)                     | thirdparty scripts database            |
| [swinton/screenshot-website](https://github.com/swinton/screenshot-website)               | grab website screenshot                |
| [SocialGouv/detect-404-action](https://github.com/SocialGouv/detect-404-action)           | detect 404 errors                      |
| [aquasecurity/trivy-action](https://github.com/aquasecurity/trivy-action)                 | Scan docker images vulnerabilities     |

## Configuration
Certains outils nécessitent une configuration supplémentaire :

### dependabot (détection de vulnérabilités issues des dépendances du projet)

ajouter un secret GitHub `DEPENDABOTALERTS_TOKEN` et lui donner pour valeur un [token d'accès personnel](https://github.com/settings/personal-access-tokens/new) ayant droit de lecture sur **"Dependabot alerts"** en sélectionnant les dépôts à scanner
      
### codescan (analyse statique de la qualité de code)

ajouter un secret GitHub `CODESCANALERTS_TOKEN` et lui donner pour valeur un [token d'accès personnel](https://github.com/settings/personal-access-tokens/new) ayant droit de lecture sur **"Code scanning alerts"** en sélectionnant les dépôts à scanner
      
### updwon (Mesures de disponibilité)

DashLord peut monitorer le niveau de performance et de disponibilité de vos applications. (mise en place = 10mins)

- Créez un compte sur [updown.io](https://updown.io)
- Ajoutez-y les urls à monitorer (telles que définies dans dashlord.yml)
- Activez l'outil avec `updownio: true` dans le fichier dashlord.yml
- Ajouter votre clé d'API updown.io "readonly" dans un secret GitHub nommé `UPDOWNIO_API_KEY` (onglet settings/secrets)

▶ Au prochain scan, les informations updown.io seront remontées dans DashLord

## Contribute

Vous pouvez contribuer en remontant des issues de qualité, en améliorant la documentation, ou en ajoutant du code.

🤗 Toutes les suggestions sont bienvenues.

cf [CONTRIBUTING.md](./CONTRIBUTING.md)

### Dev

DashLord fonctionne en deux étapes :

1. **Acquisition des données** : Pour chaque URL, chaque outil est executé et génère un fichier JSON qui sera versionné dans le repository
2. **Génération du rapport** : À partir des données existantes, l'action [report](https://github.com/SocialGouv/dashlord-actions) aggrège, compresse les résultats et produit un rapport web statique.

Voir aussi : [SocialGouv/dashlord-actions](https://github.com/SocialGouv/dashlord-actions)
