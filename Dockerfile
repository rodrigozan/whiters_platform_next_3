FROM node:18.16.1-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 5000

CMD ["npm", "dev"]
