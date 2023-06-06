# Docker - construire une image pour un site statique

## Principe

* Créer une image nginx pour le site statique [static-v1/public](static-v1/public)
* Associer le port 8888 du host au port 80 en démarrant le conteneur correspondant

## Instructions

```bash
# construire l'image
cd static-v1
docker build -t static-v1 .

# démarrer le conteneur
docker run -d --name static-v1 -p 8888:80 static-v1

# tester
curl -sS http://localhost:8888

# arrêter le conteneur
docker rm -f static-v1
```
