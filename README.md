# Ecoleta ♻️

Web application to help people find proper collection points for recycling.

It is a way to connect companies and entities that collect organic and inorganic waste to people who need to dispose their waste in an ecological way.

This project was developed during the Next Level Week offered by [Rocketseat](https://rocketseat.com.br/).

## Stack

- API Server: `Node.js` / `Express`
- SPA App (Web Frontend): `React.js`
- Database: `SQLite`

## How To Run

### API Server

- Go to `server` directory:

```
cd server
```

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

### SPA App (Web Frontend)

- Go to `web` directory:

```
cd web
```

- Install project dependencies:

```
npm i
```

- Start app:

The app will be running on port `3000`.

```
npm start
```
