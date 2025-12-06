# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env .env

RUN npx prisma generate
RUN npm run build

# Stage 2: Run
FROM node:20
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "dist/src/main.js"]
