<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<h1 align="center">Jobs & Recruiments Project</h1>

## Summary

I'm Khoa Nguyen and working as a Front-end Engineer. My primary motivation for undertaking this project was to deepen my understanding of Node.js back-end development. Additionally, I aimed to gain a comprehensive perspective of web application development, enhancing my ability to develop and maintain the entire web application as a Full-stack developer.

View more info: [npdk.dev](https://npdk.dev)

## Tech stack

This project built using the following technologies:

- Back-end framework Nest.js version 9 combine with Typescript.
- Database NoSQL (using MongoDB), running database in Docker.
- Using Mongoose plugin & MongoDB Compass tool to connect & query database.

## Main features

- Authentications, Users, Companies modules.
- Using Passport & JWT for signup/signin functionality, access token & refresh token mechanism generate.
- CRUD functionality, validate request by middleware as Pipes (class-validator).
- Controlling access to specific routes by Guards and transform response by Interceptor.
- Customize decorator.
- Write documentation with Compodoc and Swagger.

#### Features will be added

> Build up Jobs/Resume module: CRUD functionality, file manipulation.

> Permissions/Roles module: CRUD functionality.

> Subcribers module: send email with template and cronjob (schedule).

> Adding rate limiting APIs and healthchecks database.

> Build client-side to integrating RESTful APIs using React.js to become as a full-stack app.

## Overview & Documentation

![CleanShot 2024-04-18 at 01 34 08](https://github.com/npduykhoa/nestjs-restful/assets/55375876/54de4aa6-7e0a-46f8-a115-7cc6b96d25ae)
![CleanShot 2024-04-18 at 01 37 33](https://github.com/npduykhoa/nestjs-restful/assets/55375876/76955ccd-3107-4747-a114-b34baeba6e2f)

## Collections Postman

[collections.json](https://gist.github.com/npduykhoa/a2f496194b7fa8ae460d020cd68d48f6.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/npduykhoa/nestjs-restful
```

2. Install the dependencies:

**IMPORTANT: project using Node.js version 18.17.0. Please check node version and then running command line below**

```bash
npm install
```

## Usage

1. Start the project:

```bash
npm run dev
```

2. Run Compodoc:

```bash
npx @compodoc/compodoc -p tsconfig.json -s
```

3. Access the application in your browser at `http://localhost:${PORT}` (get port and some config in .env)
