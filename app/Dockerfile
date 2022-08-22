FROM node:16-alpine

WORKDIR /app

COPY package*.json .
COPY package-lock.json* .

#npm install dependencies
RUN npm install 

#copy over src codes
COPY . .

#listen to same port as express
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]



