# Contributing to DashLord

Les contributions sont bienvenues.

## Faq

### Comment modifier le rendu du rapport ?

Le rapport est généré avec l'[action report](https://github.com/SocialGouv/dashlord-actions).

Pour développer en local, récupérer le code ici : https://github.com/SocialGouv/dashlord-actions/tree/main/report/www

Vous pouvez modifier la source de cette action dans votre workflow `report.yml` pour pointer vers votre version.

### Ajouter un scanner

1. Créer une action github qui produit un fichier JSON dans le dossier "scans"
2. dans votre workflow `scans.yml`, ajouter un appel à votre action qui doit produire un JSON
3. Ajouter le support pour ce type de données dans [l'action report](https://github.com/SocialGouv/dashlord-actions)
   - intégrer les données voulues dans le `report.json` final dans `dashlord-actions/report/src/generateUrlReport`
   - ajouter le calcul du score pour cet outils dans `dashlord-actions/report/src/summary`
   - ajouter la colonne dans le dashboard : `dashlord-actions/report/www/src/components/Dashboard`
   - ajouter le détail dans la vue de l'url : `dashlord-actions/report/www/src/components/Url`
