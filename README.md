# Todolist APIs

Todolist API is a web service for managing an activity. This APIs built using the REST architecture.

## Built With

[expressjs](https://expressjs.com/) - Backend Framework
[mongodb](https://www.mongodb.com/) - Database
[mongoose](https://mongoosejs.com/) - ODM
[jsonwebtoken](https://jwt.io/) - Auth

## How to Use

### Installing

#### Clone this Repository

```bash
git clone https://github.com/abilsabili50/Todolist-API.git
```

#### Enter into the folder

```bash
cd Todolist-API
```

#### Install dependencies

```bash
npm install
```

#### Set Environment Variabel

```bash
mv .env.example .env
```

#### Run Project

```bash
npm run start
```

# APIs Specs

## Users

### A. Register

This route serves as the endpoint for creating new users.

- Method : POST
- Endpoint : `/api/register`
- Body :

  ```json
  {
  	"name": "string",
  	"email": "string",
  	"password": "string"
  }
  ```

- Response :

  ```json
  {
  	"status": "string",
  	"msg": "string",
  	"userId": "string"
  }
  ```

### B. Login

This route serves as the endpoint for the user to enter the application.

- Method : POST
- Endpoint : `/api/login`
- Body :

  ```json
  {
  	"email": "string",
  	"password": "string"
  }
  ```

- Response :

  ```json
  {
  	"status": "string",
  	"msg": "string",
  	"token": "string"
  }
  ```

## Todos

### A. Get All Todos

This route serves as the endpoint to get all todos.

- Method : GET
- Endpoint : `/api/todo`
- Header :
  - authorization : `token`
- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string",
  	"data": [
  		{
  			"id": "number",
  			"title": "string",
  			"status": "boolean"
  		}
  	]
  }
  ```

### B. Get Todo

This route serves as the endpoint to retrieving a todo.

- Method : GET
- Endpoint : `/api/todo/:id`
- Header :
  - authorization : `token`
- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string",
  	"data": {
  		"id": "number",
  		"title": "string",
  		"desc": "string",
  		"status": "boolean"
  	}
  }
  ```

### C. Add Todo

This route serves as the endpoint for creating new todos.

- Method : POST
- Endpoint : `/api/todo/`
- Header :
  - authorization : `token`
- Body :

  ```json
  {
  	"title": "string",
  	"desc": "string"
  }
  ```

- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string",
  	"todoId": "number"
  }
  ```

### D. Update Todo

This route serves as the endpoint for updating a todo.

- Method : PUT
- Endpoint : `/api/todo/:id`
- Header :
  - authorization : `token`
- Body :

  ```json
  {
  	"title": "string",
  	"desc": "string",
  	"status": "boolean"
  }
  ```

  > body may contain at least 1 field between `title`, `desc`, and `status`.

- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string"
  }
  ```

### E. Delete Todo

This route serves as the endpoint for deleting a todo.

- Method : DELETE
- Endpoint : `/api/todo/:id`
- Header :
  - authorization : `token`
- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string"
  }
  ```

### F. Delete All Todos

This route serves as the endpoint for deleting all todos.

- Method : DELETE
- Endpoint : `/api/todo/`
- Header :
  - authorization : `token`
- Response :
  ```json
  {
  	"status": "string",
  	"msg": "string"
  }
  ```

# Big Attention

- This code is far from perfect, this code only facilitates crud todo and an authentication system without any logout and encryption system.
- This code is also specially created to complete the task of TPA 5 at MSIB Batch 3 (Skilvul).
- So feel free to fork and copy it for your project or some practice needs.
