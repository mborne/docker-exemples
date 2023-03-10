# Docker - Quelques exemples

## Description

Ces exemples ont vocation à être des annexes de la rubrique [mborne/cours-devops - DevOps avec des conteneurs](https://mborne.github.io/cours-devops/annexes/proxy-sortant/).

## Mise en garde

Ils visent à se familiariser avec docker à l'aide d'un bac à sable tel [labs.play-with-docker.com](https://labs.play-with-docker.com/). Ils devront être adaptés pour [travailler derrière un proxy avec Docker](https://mborne.github.io/cours-devops/annexe/proxy-sortant/proxy-docker.html).

## Création de conteneurs

> Objectifs : `docker run --rm -ti`

* [figlet-run.md - Installer et tester figlet dans un conteneur](figlet-run.md)

## Création d'images

> Objectifs : `docker build`

* [figlet-v1.md - Créer une image figlet basée sur debian](figlet-v1.md)
* [figlet-v2.md - Créer une image figlet avec un entrypoint](figlet-v2.md)

## Accès aux services

> Objectifs : `docker run -d -p`

* Docker - Utiliser l'image whoami et accéder au conteneur par son IP
* [Docker - Utiliser l'image whoami et accéder au port 80](whoami-port.md)

## Utilisation de volumes

> Objectif : `docker run -v` et `docker cp`

* Docker - Utiliser l'image nginx pour servir des fichiers
* Docker - Étendre l'image nginx et construire l'image d'un site statique
* Docker - Utiliser l'image PostgreSQL

## Voir aussi

* [container.training - Introduction to Containers](https://container.training/intro-selfpaced.yml.html#1).
* [docs.docker.com - Docker overview](https://docs.docker.com/get-started/overview/).
* [github.com - mborne/docker-devbox](https://github.com/mborne/docker-devbox#readme) pour des exemples de déploiement d'applications plus réalistes.

## Licence

[MIT](LICENSE)
