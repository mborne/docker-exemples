# Docker - Créer une image figlet basée sur debian

## Principe

* Création d'un fichier [figlet-v2/Dockerfile](figlet-v2/Dockerfile) donnant les instructions pour construire l'image
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

## Démonstration

[![asciicast](https://asciinema.org/a/563580.svg)](https://asciinema.org/a/563580)


## Ressources

* [docs.docker.com - Docker (CLI) - docker run](https://docs.docker.com/engine/reference/commandline/run/)
* [docs.docker.com - Docker (CLI) - docker build](https://docs.docker.com/engine/reference/commandline/build/)
* [docs.docker.com - Dockerfile reference - ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)
