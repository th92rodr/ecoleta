# Ecoleta Server

## Stack

- Node.js / Express
- SQLite

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
npm run dev
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
