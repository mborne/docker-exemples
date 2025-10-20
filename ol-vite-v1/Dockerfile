# construction /app/dist dans une image NodeJS
FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


# copie de /app/dist dans une image Nginx
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html


