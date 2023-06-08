# Docker - construire une image pour une application NodeJS avec une meilleure gestion du cache

## Principe

* Créer une image pour l'application NodeJS [nodejs-v2](nodejs-v2/README.md)
* Associer le port 8888 du host au port 80 en démarrant le conteneur correspondant

## Instructions

```bash
# construire l'image
cd nodejs-v2
docker build -t nodejs-v2 .

# démarrer le conteneur
docker run -d --name nodejs-v2 -p 8888:3000 nodejs-v2

# tester
curl -sS http://localhost:8888

# modifier server.js et reconstruire pour constater 
# que "npm install" est en cache.
docker build -t nodejs-v2 .

# arrêter le conteneur
docker rm -f nodejs-v2
```

## Remarques

Le fichier [nodejs-v2/Dockerfile](nodejs-v2/Dockerfile) n'est pas optimal. La présence d'une seule couche pour l'ajout de `package.json` induit l’absence de cache sur `npm install` à la construction.

