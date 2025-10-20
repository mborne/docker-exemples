# Docker - Quelques exemples

## Description

Ces exemples sont des annexes de la rubrique [mborne/cours-devops - DevOps avec des conteneurs](https://mborne.github.io/cours-devops/annexes/proxy-sortant/).

## Mise en garde

Ils visent à se familiariser avec docker à l'aide d'un bac à sable tel [labs.play-with-docker.com](https://labs.play-with-docker.com/). Ils devront être adaptés pour [travailler derrière un proxy avec Docker](https://mborne.github.io/cours-devops/annexe/proxy-sortant/proxy-docker.html).

## Création de conteneurs

> Objectifs : `docker run --rm -ti`, isolation des processus

* [pseudo-vm - création d'un conteneur jetable et inspection des processus](pseudo-vm.md)
* [figlet-run - Installer et tester figlet dans un conteneur](figlet-run.md)

## Création d'images

> Objectifs : `Dockerfile` et `docker build`

* [figlet-v0 - Créer une image figlet basée sur debian (sans optimisation)](figlet-v0.md)
* [figlet-v1 - Créer une image figlet basée sur debian](figlet-v1.md)
* [figlet-v2 - Créer une image figlet avec un entrypoint](figlet-v2.md)

## Accès aux services

> Objectifs : `docker run -d -p`

* [whoami-ip - Utiliser l'image whoami et accéder au conteneur par son IP](whoami-ip.md)
* [whoami-port - Utiliser l'image whoami et accéder au port 80](whoami-port.md)

## Utilisation de volumes

> Objectif : `docker run -v` avec volume mappé et volume nommé

* [nginx-v1 - Utiliser l'image nginx pour servir des fichiers locaux](nginx-v1.md)
* [postgres - Utiliser l'image PostgreSQL en externalisant les données](postgres.md)

## Observabilité

> Objectifs : `docker logs -f` et `docker stats`

* Démarrer à nouveau [nginx-v1](nginx-v1.md)
* Ouvrir http://localhost:8888/ et http://localhost:8888/not-found
* Utiliser [docker logs nginx-v1](https://docs.docker.com/engine/reference/commandline/logs/) pour visualiser les **journaux applicatifs** correspondant (ajouter `-f` pour suivre)
* Utiliser [docker stats](https://docs.docker.com/engine/reference/commandline/stats/) pour visualiser les **métriques systèmes** (CPU, mémoire, entrées/sorties réseaux et disques)

## Création d'images pour des services

> Objectif : `docker build` et exemples concrets

* [static-v1 - construire une image pour un site statique](static-v1.md)
* [nodejs-v1 - construire une image pour une application NodeJS](nodejs-v1.md)
* [nodejs-v2 - construire une image pour une application NodeJS avec une meilleure gestion du cache](nodejs-v2.md)
* [php-basic-v1 - construire une image pour un site PHP (à l'ancienne)](php-basic-v1.md)

> Objectif : [multi-stage build](https://docs.docker.com/build/building/multi-stage/)

* [ol-vite-v1 - construire un site statique dans une image NodeJS et copier le résultat dans une image nginx](ol-vite-v1/README.md) - [ol-vite-v1/Dockerfile](ol-vite-v1/Dockerfile)

## Voir aussi

* [container.training - Introduction to Containers](https://container.training/intro-selfpaced.yml.html#1).
* [docs.docker.com - Docker overview](https://docs.docker.com/get-started/overview/).
* [github.com - mborne/docker-devbox](https://github.com/mborne/docker-devbox#readme) pour des exemples de déploiement d'applications plus réalistes.

## Licence

[MIT](LICENSE)
