FROM node:25-alpine
WORKDIR /app
LABEL maintainer="Melisates"
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build 

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

