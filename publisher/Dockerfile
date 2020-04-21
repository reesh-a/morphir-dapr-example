FROM node:8-alpine
WORKDIR /app
COPY node-publisher.js .
RUN npm install
EXPOSE 3000
CMD [ "node", "node-publisher.js" ]