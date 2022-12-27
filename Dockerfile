FROM node:18.12.1 as base
WORKDIR /hack-it-up
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev
EXPOSE 8080
CMD [ "node", "app/index.js" ]