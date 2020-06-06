# Ecoleta API Server

## Stack

- <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-green.svg?logo=node.js" alt="Node.js"></a> / <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-green.svg?logo=node.js" alt="Express"></a>
- <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/SQLite-003B57.svg?logo=SQLite" alt="SQLite"></a>

## Run Application

- Install project dependencies:

```
npm i
```

- Init the database (create tables and default records):

```
npm run knex:migrate
npm run knex:seed
```

- Start the server:

The server will be running on port `3333`.

```
npm start
```

## API Routes

- GET on `/items`:

List all items registered.

- GET `/points`:

List all collect points registered.

- GET `/points/:id`:

Show a specific collect point.

- POST `/points`:

Register a new collect point.
