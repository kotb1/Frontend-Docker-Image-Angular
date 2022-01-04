FROM node:latest as node
WORKDIR /appx
RUN chown -R root:$(whoami) /appx
RUN chmod -R 777 /appx/
COPY . .
RUN npm install
CMD npm start