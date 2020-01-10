FROM node:10-alpine as build-stage

WORKDIR /app
COPY src ./

RUN npm install --quiet
RUN npm run build
