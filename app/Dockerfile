FROM node:16-alpine

WORKDIR /app

COPY package*.json .
COPY package-lock.json* .

#npm install dependencies
RUN npm install 

#copy over src codes
COPY . .

#listen to same port as express
ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]



