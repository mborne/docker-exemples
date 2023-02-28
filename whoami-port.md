# Docker - Utiliser l'image whoami et accéder au port 80

## Principe

* Téléchargement de la dernière version de l'image [containous/whoami](https://hub.docker.com/r/containous/whoami)
* Démarrer un conteneur nommé en mode détaché (`-d`) en associant le port 8888 du host au port 80 du conteneur

## Instructions

```bash
# téléchargement de l'image
docker pull containous/whoami:latest
# démarrage du conteneur
docker run -d --name whoami -p 8888:80 containous/whoami:latest
# test avec curl
curl -sS http://localhost:8888
# arrêter le conteneur
docker stop whoami
# supprimer le conteneur
docker rm whoami
```

## Démonstration

[![asciicast](https://asciinema.org/a/563588.svg)](https://asciinema.org/a/563588)
