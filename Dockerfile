FROM node:18.12.1
WORKDIR /hack-it-up
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev
RUN npm i -g nodemon
EXPOSE 8080
CMD [ "node", "app/index.js" ]