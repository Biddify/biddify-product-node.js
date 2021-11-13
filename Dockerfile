FROM node:alpine

WORKDIR /app
COPY package.json ./
EXPOSE 3000
RUN npm install
RUN npm install --global nodemon

RUN apk update && apk add netcat-openbsd

COPY ./ ./

CMD [ "npm", "start"]