<h1 align="center">Ecoleta ♻️</h1>

<p align="center">Connecting recycling collection points with people who need to dispose their waste in an ecological way.</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/th92rodr/ecoleta?color=7159c1">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/th92rodr/ecoleta?color=b24c63" />
  <a href="https://github.com/th92rodr/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/th92rodr/ecoleta?color=3675d3" />
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-fff?color=1A424F" />
  <a href="https://github.com/th92rodr/ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/th92rodr/ecoleta?style=social" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/repo status-Done-fff?style=flat&color=47A248" alt="Done - The project has been finalized." />
</p>

<p align="center">
 <a href="#about">About</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#layout">Layout</a> •
 <a href="#how-it-works">How it works</a> •
 <a href="#license">License</a>
</p>

## About

Web application to help people find proper collection points for recycling.

It is a way to connect companies and entities that collect organic and inorganic waste to people who need to dispose their waste in an ecological way.

This project was developed during the Next Level Week #01 offered by [Rocketseat](https://rocketseat.com.br/).

## Tech Stack

The following tools were used for building this project:

**API**

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)

**Website**

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

**Mobile App**

- [ReactNative](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)

## Layout

You can check the layout at [Figma](https://www.figma.com/file/SUfeECLcCBzH45XWjXAhYc/Ecoleta?node-id=0%3A1).

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:

- `Node.js`<br />
  recommend version 12.18

  `Node` can be installed from `https://nodejs.org/en/`.

- `NPM`:<br />
  recommend version 6.14

  Installing `Node` will also install `NPM` automatically.

### Running the API

Make sure you are inside the `server` folder, then follow these steps:

- Install project dependencies:

```sh
npm install
```

- Init the database (create tables and default records):

```sh
npm run knex:migrate
npm run knex:seed
```

- Start the API:

```sh
npm start
```

The API will be running on PORT `3333`.

### Running the Web App

Make sure you are inside the `web` folder, then follow these steps:

- Install project dependencies:

```sh
npm install
```

- Start the APP:

```sh
npm start
```

The app will be running on port `3000`.

### Running the Mobile App

Make sure you are inside the `mobile` folder, then follow these steps:

- Install project dependencies:

```sh
npm install
```

- Start the APP:

```sh
npm start
```

- Expo Developer Tools.

  - Expo Developer Tools will open up in the browser.
  - Select `LAN` as connection type.
  - Open the Expo mobile phone app.
  - Scan the provided QR Code with the Expo app.

---

## License

This project is under the license [MIT](./LICENSE).
