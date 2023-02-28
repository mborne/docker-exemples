# Docker - Créer une image figlet basée sur debian

## Principe

* Création d'un fichier [figlet-image/Dockerfile](figlet-image/Dockerfile) donnant les instructions pour construire l'image
* Construction de l'image
* Test de l'image

## Instructions

```bash
# construction de l'image
cd figlet-image
docker build -t figlet .
# test de l'image
docker run -ti figlet /usr/bin/figlet "It works!"
```

## Résultat

![figlet-image](figlet-image.svg)
