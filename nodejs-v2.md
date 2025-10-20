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

Avec cette approche, [nodejs-v2/Dockerfile](nodejs-v2/Dockerfile) permet une meilleure exploitation des mécanismes de cache à la construction que dans le cas [nodejs-v1/Dockerfile](nodejs-v1/Dockerfile)

En effet, le téléchargement des dépendances n'interviendra que lorsque que package.json ou package-lock.json sont modifiés. Les modifications du code (ex : changement sur server.js) n'induiront pas un nouveau téléchargement des dépendances.
