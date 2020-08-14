
FROM node:11.8.0-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
copy . .
EXPOSE 3100
CMD "node" "server.js"