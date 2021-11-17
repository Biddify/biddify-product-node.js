FROM node:alpine

WORKDIR /app
COPY package.json ./

RUN npm install
RUN npm install --global nodemon

COPY ./ ./

CMD [ "npm", "start"]