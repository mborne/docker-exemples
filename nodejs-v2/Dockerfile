FROM node:22-alpine

WORKDIR /opt/nodejs-v2

# téléchargement des dépendances
COPY package.json package-lock.json .
RUN npm install

# puis copie des autres fichiers...
COPY . .

# bascule utilisateur non root pour exécution
USER node
EXPOSE 3000
CMD ["node","server.js"]

