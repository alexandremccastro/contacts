# Contacts

A managing app that helps users organize their contacts

## Server setup

First of all you need to setup the server back-end.

```
cd server
```

Install server dependencies

```
yarn install
```

Setup app database and other configs in .env

```
cp .env.example .env
```

You need to provide a correct connection with neo4j database to start this app.

## Front setup

Install front-end dependencies

```
yarn install
```

Setup API url other configs in .env. Provide a correct serer URL in the .env.local file.

```
cp .env.example .env.local
```

The server may run in localhost:3000 if you don't provide the APP_PORT param in .env file.
