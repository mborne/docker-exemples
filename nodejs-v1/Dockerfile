FROM node:22-alpine

WORKDIR /opt/nodejs-v1
COPY . .
RUN npm install

# bascule utilisateur non root pour exécution
USER node
EXPOSE 3000
CMD ["node","server.js"]

