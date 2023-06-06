# Docker - Créer une image figlet basée sur debian

## Principe

* Création d'un fichier [figlet-v0/Dockerfile](figlet-v0/Dockerfile) donnant les instructions pour construire l'image
* Construction de l'image
* Test de l'image
* Inspection des couches

## Instructions

```bash
# construction de l'image
cd figlet-v0
docker build -t figlet-v0 .
# test de l'image
docker run -ti figlet-v0 /usr/bin/figlet "It works!"
# inspection des couches
# (et noter les Mo innutiles de apt-get update)
docker image history figlet-v0
```

## Ressources

* [docs.docker.com - Docker (CLI) - docker run](https://docs.docker.com/engine/reference/commandline/run/)
* [docs.docker.com - Docker (CLI) - docker build](https://docs.docker.com/engine/reference/commandline/build/)
