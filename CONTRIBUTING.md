# Contributing to DashLord

Contributions are very welcome

## Faq

### How to change the report output ?

The report is generated with the [report action](https://github.com/SocialGouv/dashlord-actions). You can create your own and swap it in the `scans.yml` workflow.

### How to customise some scanner behaviour ?

You can fine tune each scanner with parameters, see related GH action repo.

### Ajouter un scanner

1. Créer une action github qui produit un fichier JSON
2. Ajouter le support pour ce type de données dans [l'action report](https://github.com/SocialGouv/dashlord-actions)
