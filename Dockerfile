# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# 1) package.json yükle
COPY package*.json ./

# 2) Dependencies
RUN npm install

# 3) Uygulamanın tümünü kopyala (.env dahil)
COPY . .

# 4) Prisma client generate edilmesi ŞART
RUN npx prisma generate

# 5) Build
RUN npm run build


# Stage 2: Run
FROM node:20-alpine
WORKDIR /app

# builder’dan tüm app’i al
COPY --from=builder /app ./

# Port
EXPOSE 3000

# Run
CMD ["node", "dist/src/main.js"]
