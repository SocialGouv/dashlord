# Contributing to DashLord

Les contributions sont bienvenues.

## Faq

### Comment modifier le rendu du rapport ?

Le rapport est généré avec l'[action report](https://github.com/SocialGouv/dashlord-actions). 

Pour développer en local, récupérer le code ici : https://github.com/SocialGouv/dashlord-actions/tree/main/report/www

Vous pouvez modifier la source de cette action dans votre workflow `report.yml` pour pointer vers votre version.

### Ajouter un scanner

1. Créer une action github qui produit un fichier JSON
3. Ajouter le support pour ce type de données dans [l'action report](https://github.com/SocialGouv/dashlord-actions) : 
   - calcul du "summary" (note affichée)
   - rendu visuel
   - types typescript
