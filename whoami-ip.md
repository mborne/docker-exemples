# Docker - Utiliser l'image whoami et accéder au port 80

## Principe

* Télécharger la dernière version de l'image [containous/whoami](https://hub.docker.com/r/containous/whoami)
* Démarrer un conteneur nommé en mode détaché (`-d`) en associant le port 8888 du host au port 80 du conteneur

## Instructions

```bash
# téléchargement de l'image
docker pull containous/whoami:latest
# démarrage du conteneur et récupération de l'identifiant
docker run -d --name whoami containous/whoami:latest
# récupération de l'IP du conteneur
WHOAMI_IP=$(docker inspect whoami --format '{{ .NetworkSettings.IPAddress }}')
# test avec curl
curl -sS http://$WHOAMI_IP:80
# arrêter le conteneur
docker stop whoami
# supprimer le conteneur
docker rm whoami
```

## Démonstration

[![asciicast](https://asciinema.org/a/sOvE0sxx3lVnrg0PNnmTofZAh.svg)](https://asciinema.org/a/sOvE0sxx3lVnrg0PNnmTofZAh)
