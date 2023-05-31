# Docker - Utiliser l'image nginx pour servir des fichiers locaux

## Principe

* Démarrer un conteneur en montant `nginx-v1/public` sur `/usr/share/nginx/html`
* Associer le port 8888 du host au port 80 du conteneur pour pouvoir tester

## Instructions

```bash
# démarrer le conteneur
docker run -d --name nginx-v1 \
    -v ./nginx-v1/public:/usr/share/nginx/html \
    -p 8888:80 nginx:latest

# tester
curl -sS http://localhost:8888

# arrêter le conteneur
docker stop nginx-v1
# supprimer le conteneur
docker rm nginx-v1
```
