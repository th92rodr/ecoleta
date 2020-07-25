# Ecoleta API Server

## Tech Stack

The following tools were used for building this project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:

- `Node.js`<br />
  recommend version 12.18

  `Node` can be installed from `https://nodejs.org/en/`.

- `NPM`:<br />
  recommend version 6.14

  Installing `Node` will also install `NPM` automatically.

## Running the API

Make sure you are inside the `server` folder, then follow these steps:

- Install project dependencies:

```
npm install
```

- Init the database (create tables and default records):

```
npm run knex:migrate
npm run knex:seed
```

- Start the API:

```
npm start
```

The API will be running on PORT `3333`.

## API Endpoints

- GET on `/items`:

List all items registered.

- GET `/points`:

List all collect points registered.

- GET `/points/:id`:

Show a specific collect point.

- POST `/points`:

Register a new collect point.
