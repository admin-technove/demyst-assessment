
# Demyst Assesment

## Monorepo

Monorepo is used to manage the frontend and backend codebase. NX is used to manage the monorepo.Some of the code is bootstrapped using the nx cli.

##  Backend

Backend is built on Node.js

## Frontend

Frontend is built on React.js. To simply the development process, the frontend is bootstrapped using the nx cli. Tailwind CSS is used for styling as it gives out of the box utility classes.

## Common Library

Common library is used to share the common model between frontend and backend. It is built using typescript.

## Docker

To simply the process for the evaluator, the project is dockerized. The frontend and backend are dockerized separately. Docker-compose is used to run the frontend, backend and `show-me-the-money` together.

## Running the project

Given that you have the docker installed, Simply run the following command to run the project:

```bash
docker-compose up
```

Once the project is running, you can access the frontend on `http://localhost:3002/` and backend on `http://localhost:3001`.

#### Author

Muhammad Zeeshaan Shafiq