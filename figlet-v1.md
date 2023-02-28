# Docker - Créer une image figlet basée sur debian

## Principe

* Création d'un fichier [figlet-v1/Dockerfile](figlet-v1/Dockerfile) donnant les instructions pour construire l'image
* Construction de l'image
* Test de l'image

## Instructions

```bash
# construction de l'image
cd figlet-v1
docker build -t figlet-v1 .
# test de l'image
docker run -ti figlet-v1 /usr/bin/figlet "It works!"
```

## Démonstration

[![asciicast](https://asciinema.org/a/563581.svg)](https://asciinema.org/a/563581)

