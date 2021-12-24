# CRUD application with Node.js + PostgreSQL

## Recursos Used 🚀

* **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-gllemos)**
* **[Node.js](https://nodejs.org/en/)**
* **[Postman](https://www.getpostman.com/)**
* **[PostgreSQL - PgAdmin](https://www.postgresql.org/download/)**

## Running the application locally ⭐️

1. To run the application locally, you will need to create the table in Pg Admin. The script is located in the project's `sql` folder.

2. Then just go to: `server` and run the following command:

```bash
> npm i
```

3. Now run the project inside the `server` folder with the following command:

```bash
> npm run dev
```

4. Open Postman. Now you can:

| Method | HTTP verb | Endpoint |
|---|---|---|
| Create new User | POST | `http://localhost:3000/api/users` |
| List All Users | GET | `http://localhost:3000/api/users` |
| Find User by Id | GET | `http://localhost:3000/api/users/{id}`|
| Update User by Id | UPDATE | `http://localhost:3000/api/users/{id}`|
| Delete User by Id | DELETE | `http://localhost:3000/api/users/{id}`|
