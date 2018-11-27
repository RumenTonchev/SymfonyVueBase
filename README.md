# SymfonyVueBase
This is a project that combines Symfony and Vue.js

[detailed documentation](https://docs.google.com/document/d/18qDjopEtL6pxolAnWL6zv94j2LYY97b2QMvHfvBF9Uc/edit?usp=sharing)


## Requirements
PHP 7.1.3 or higher

[Composer](https://getcomposer.org/)

[Node.js](https://www.npmjs.com/get-npm)

## Instalation
run those commands

```
composer install
npm install
```

## Running the project
The root directory of the project is /public
Use apache application to start the php server or the following command in the root of the project

```
php bin/console server:run
```

Run the node server in the root of the project

```
npm run dev-server
```

If you use the "php bin/console server:run" to start the project you can use this command to start both servers at once

```
npm run full-server
```

## Building the Vue.js for production
To build the Vue.js project run

```
npm run build
```
