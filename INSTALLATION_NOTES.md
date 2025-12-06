####Installation Instructions 
### BACKEND SIDE
1. mkdir ToDo-App
2. cd ToDo-App
3. mkdir backend
4. cd backend
5. nest new .
6. npm install prisma --save-dev
7. npm install @prisma/client
8. npx prisma init
9. Set up your database connection in the `.env` file.

## Create prisma schema
10. npx prisma migrate dev --name init //try in local (optional)

info : ni dnm.txt // create a file for windows 

## Create dockerFile and docker-compose.yml
11. docker compose build(we try just for backend and db)
info: docker compose build --no-cache //for a cleaner beginning 

```bash 
PS C:\Users\melisates\development\docker_projects\todo-app\backend> docker compose build
[+] Building 0.0s (0/0)
error during connect: Head "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/_ping": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
```
This error solution is openning docker desktop.

12. docker compose up -d
```bash
[+] Running 4/4
 ✔ Network backend_postgres-network  Created                                                                                                 0.1s 
 ✔ Volume backend_pgdata             Created                                                                                                 0.0s 
 ✔ Container todo-db                 Started                                                                                                 1.0s 
 ✔ Container todo-backend            Started                                                                                                 0.8s 
```

### FRONTEND SIDE
1. mkdir frontend
2. cd frontend
3. npm create vite@latest .//Vite is a tool that allows you to quickly start and develop a React project and also create a production build.
4. npm install
5. npm install axios
6. create src/api.ts (axios)
7. edit App.tsx
8. create Dockerfile for frontend
9. npm run dev
10. create general docker-compose.yml, so you can frontend side to docker-compose.yml
11. docker compose up --build -d

- migrate in backend container
docker exec -it todo-backend npx prisma migrate deploy(for db that u create in prisma schema)


docker exec -it todo-db psql -U postgres -d tododb
docker inspect todo-backend --format '{{json .Config.Env}}'
