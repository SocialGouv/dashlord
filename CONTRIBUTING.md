# Contributing to DashLord

Les contributions sont bienvenues.

## Comment modifier le rendu du rapport ?

Le rapport est généré avec l'[action report](https://github.com/SocialGouv/dashlord-actions/tree/main/report).

Pour développer en local, récupérer le code ici : https://github.com/SocialGouv/dashlord-actions/tree/main/report/www

Pour l'utiliser dans votre dashlord hebergé sur GitHub, modifiez la source de cette action dans votre workflow `report.yml` pour pointer vers votre version (ex: `uses: "my-gh-org/dashlord-actions/report@master"`).

## Ajouter un scanner

#### Etape 1 : Acquisition des données

- créer un repo dédié à l'action et ses tests
- Dans une branche d'un dashlord:
  - référencer l'action dans `.github/workflows/scan.yml`
  - activer le scan dans `dashlord.yml`
- Faire tourner un scan d'URL sur cette branche.
- Un fichier JSON produit par l'action doit se trouver dans `results/xxxxx/xxxx.json` à la fin du scan.

:warning: L'action doit déposer son JSON dans le dossier `scans` pour qu'il soit automatiquement versionné dans GIT.

#### Etape 2 : Ajout des données dans le rapport DashLord

- cloner le repo `socialgouv/dashlord-actions` localement et créer une branche
- dans `report/src/generateUrlReport` inclure le fichier JSON de l'action dans le rapport JSON généré pour l'URL : https://github.com/SocialGouv/dashlord-actions/blob/main/report/src/generateUrlReport.js#L117
- si besoin, minimiser les données importées (elle seront servies au front)
- si besoin de calculer une "note" pour ce scanner, ajouter une fonction dans `report/src/summary`.

##### Tester la generation du report.json :

Pour tester la generation du rapport, il faut avoir en local un clone d'un dashlord avec les données de votre nouvelle action. (ex: branche de test qui a déjà reçu les résultat de la nouvelle action)

```sh
cd report
DASHLORD_REPO_PATH=$PWD/path/to/dashlord node src/index.js
```

Ceci produira un fichier général `report.json` qui contient les resultats de tous les scans de toutes les urls. Vérifiez que les résultats de votre action sont bien présentes pour l'URL de test.

#### Etape 3 : Affichage des données dans l'UI DashLord

Lancer le site localement :

```sh
cd report/www
yarn && yarn dev
```

NB : Les fichiers `report/www/src/report.json` et `report/www/src/config.json` doivent contenir les données que vous souhaitez afficher.

Dans le fichier `report/www/src/components/Url.tsx`, logger les données de `report` qui doivent contenir toutes les données pour une URL donnée pour verifier que vous avez bien récupéré les données de votre action.

Ajoutez vos composants qui consomment ces données and have a break :coffee: :v:
