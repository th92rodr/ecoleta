# Ecoleta ♻️

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/th92rodr/ecoleta?color=%237519C1">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/th92rodr/ecoleta">
  <img alt="License" src="https://img.shields.io/github/license/th92rodr/ecoleta?color=%237519C1">
</p>

Web application to help people find proper collection points for recycling.

It is a way to connect companies and entities that collect organic and inorganic waste to people who need to dispose their waste in an ecological way.

This project was developed during the Next Level Week #01 offered by [Rocketseat](https://rocketseat.com.br/).

You can checkout the layout at [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta).

## Stack

- API Server: <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-green.svg?logo=node.js" alt="Node.js"></a> / <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-green.svg?logo=node.js" alt="Express"></a>
- SPA App (Web Frontend): <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React.js-blue.svg?logo=react" alt="React.js"></a>
- Mobile App: <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/ReactNative-blue.svg?logo=react" alt="ReactNative"></a> / <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/Expo-000020.svg?logo=expo" alt="Expo"></a>
- Database: <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/SQLite-003B57.svg?logo=SQLite" alt="SQLite"></a>

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
npm start
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

### Mobile App

- Go to `mobile` directory:

```
cd mobile
```

- Install project dependencies:

```
npm i
```

- Start app:

```
npm start
```

- Expo Developer Tools.

  - Expo Developer Tools will open up in the browser.
  - Select `LAN` as connection type.
  - Open the Expo mobile phone app.
  - Scan the provided QR Code with the Expo app.
