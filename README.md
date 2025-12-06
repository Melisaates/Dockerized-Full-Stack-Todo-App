# 🚀 Dockerized Full-Stack Todo App
Full-Stack Todo application built with **NestJS + PostgreSQL + React + Docker + Nginx Reverse Proxy**. Production-ready container architecture.

## ✨ Tech Stack
| Layer | Tech |
|---|---|
| Frontend | React + Vite |
| Backend | NestJS |
| Database | PostgreSQL |
| ORM | Prisma |
| Reverse Proxy | Nginx |
| Container | Docker & Docker Compose |

## 📦 Features
✔ Full-stack architecture  
✔ Backend + Frontend in Docker  
✔ PostgreSQL + Prisma  
✔ Reverse proxy with Nginx  
✔ 100% containerized  
✔ Single command deployment  
✔ Production-ready  

## 🧱 Project Structure
/backend  
/frontend  
/nginx  
docker-compose.yml  

## 🔧 Installation
### Clone repository
git clone https://github.com/Melisaates/Dockerized-Full-Stack-Todo-App.git  
cd Dockerized-Full-Stack-Todo-App  

## ▶ Run With Docker
docker compose up --build -d  

App runs at: http://localhost  

## 🗄 Database
PostgreSQL automatically runs inside docker.  

### Access database container:
docker exec -it todo-db psql -U postgres -d tododb  

## 🌐 Nginx Reverse Proxy
Client → Nginx → Frontend  
             ↳ Backend  

### nginx.conf
server {  
  listen 80;  

  location / {  
    proxy_pass http://frontend:5173;  
  }  

  location /api {  
    proxy_pass http://backend:3000;  
  }  
}

Access everything → http://localhost  

## 📁 Environment variables
DATABASE_URL=postgresql://postgres:postgres@todo-db:5432/tododb?schema=public  

## 🔌 Useful Commands
Build:
docker compose up --build -d  

Stop:
docker compose down  

Logs:
docker compose logs -f  

## 🧬 Prisma
docker exec -it todo-backend npx prisma migrate deploy  

## 📌 Endpoints
GET /api/todos  
POST /api/todos  
PUT /api/todos/:id  
DELETE /api/todos/:id  

## ✨ How to Contribute
Pull requests are welcome ❤️  

## 📄 License
MIT  

## 👩‍💻 Author
Melisa Ateş  

## 📌 Additional Notes (My learning notes)
mkdir ToDo-App  
nest new .  
npm create vite  
docker compose up  
npx prisma migrate dev  
postgre volume  
docker exec -it  
nginx proxy  
etc…  

(These are personal notes while learning Docker.)

## 🎉 Done — fully dockerized & running!

HTTPS production (Let’s Encrypt), AWS / Azure deployment, GitHub Actions CI/CD → easily addable 🔥  
