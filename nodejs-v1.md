# Docker - construire une image pour une application NodeJS

## Principe

* Créer une image pour l'application NodeJS [nodejs-v1](nodejs-v1/README.md)
* Associer le port 8888 du host au port 80 en démarrant le conteneur correspondant

## Instructions

```bash
# construire l'image
cd nodejs-v1
docker build -t nodejs-v1 .

# démarrer le conteneur
docker run -d --name nodejs-v1 -p 8888:3000 nodejs-v1

# tester
curl -sS http://localhost:8888

# arrêter le conteneur
docker rm -f nodejs-v1
```

## Remarques

Le fichier [nodejs-v1/Dockerfile](nodejs-v1/Dockerfile) n'est pas optimal. La présence d'une seule couche pour l'ajout de `package.json` induit l’absence de cache sur `npm install` à la construction.

