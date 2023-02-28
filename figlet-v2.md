# Docker - Créer une image figlet basée sur debian

## Principe

* Création d'un fichier [figlet-entrypoint/Dockerfile](figlet-entrypoint/Dockerfile) donnant les instructions pour construire l'image
* Construction de l'image
* Test de l'image

## Instructions

```bash
# construction de l'image
cd figlet-v2
docker build -t figlet-v2 .
# test de l'image
docker run -ti figlet-v2 "It works!"
```

## Résultat

![figlet-image](figlet-image.svg)
