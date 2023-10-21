# php-basic-v1 - construire une image pour un site PHP (à l'ancienne)

## Principe

* Créer une image pour le site PHP [php-basic-v1](php-basic-v1)
* Associer le port 8000 du host au port 80 en démarrant le conteneur correspondant

## Instructions

```bash
# construire l'image
cd php-basic-v1
docker build -t php-basic-v1 .

# démarrer le conteneur
docker run -d --name php-basic-v1 -p 8000:80 php-basic-v1

# tester
curl -sS http://localhost:8000

# modifier server.js et reconstruire pour constater 
# que "npm install" est en cache.
docker build -t php-basic-v1 .

# arrêter le conteneur
docker rm -f php-basic-v1
```

## Remarques

Le fichier [php-basic-v1/Dockerfile](php-basic-v1/Dockerfile) n'est pas optimal. La présence d'une seule couche pour l'ajout de `package.json` induit l’absence de cache sur `npm install` à la construction.

