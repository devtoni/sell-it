[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)]
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# [Sellit](http://sellitapp.herokuapp.com/)

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

---
### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=XXXX
  ```

- Mongodb path and database to use:

  ```
  urlDb=mongodb://localhost:27017/NAME_DB
  ```
- Secret key to encrypt cookies:

  ```
  SECRETKEY=XXXXXXXXXX
  ```
  
- Secret word to encrypt users' passwords:

  ```
  SECRET=XXXXXXXXXX
  ```

- Secret credentials from Cloudinary in order to upload images directly

  ```
  CLOUDINARY_API_KEY=XXXXXXXXXXXXX
  CLOUDINARY_API_SECRET=XXXXXXXXXXXX
  CLOUD_NAME=XXXXXXXXXXXXX
  ```
- Secret Api Key for Google Maps in order to use Geocode

  ```
  API=XXXXXXXXXXXX
  ```

- Folder that will allow multer to generate a dynamic path for upload your images for client side

  ```
  UPLOAD_FOLDER=XXXXXXXXXXXXXX
  ```
---

### To run the server:

```
$ npm start
```

All dependencies will be installed automatically

### To run in dev mode:

```
$npm run dev
```

## API

The server part has multiple **API endpoints** using several routes:

- `/api` -> Serves the internal data of the users and players.
- `/auth` -> Serves the authentication options, register and login for user and admin

---

## Built with:

- **Front-end**

    - angular: 1.6.6
      - angular-ui-router: 0.4.2
      - angular-jwt: 0.1.9
      - angular-animate: 1.6.6
      - angularJS-Toaster: angularjs-toaster#2.2.0
    - bootstrap: v4.0.0-beta
    - bower: 1.8.0
    - materialize: 0.100.1
    - font-awesome: 4.7.0
    - chart.js: 2.6.0
    - sweetalert2: 6.6.9
    - moment: 2.18.1

- **Back-end**

    - async: 2.5.0,
    - body-parser: 1.17.2,
    - bower: 1.8.0,
    - cloudinary: 1.9.0,
    - connect-mongo: 1.3.2,
    - cookie-parser: 1.4.3,
    - del: 3.0.0,
    - dotenv: 4.0.0,
    - express: 4.15.4,
      - express-form-data: 2.0.0,
      - express-session: 1.15.5,
    - jsonwebtoken: 7.4.3,
    - lodash: 4.17.4,
    - moment: 2.18.1,
    - mongodb: 2.2.31,
      - mongoose: 4.7.1,
    - morgan: 1.8.2,
    - multer: 1.3.0,
    - node-geocoder: 3.20.0,
    - nodemailer: 4.1.0,
    - passport: 0.4.0,
      - passport-jwt: 3.0.0,
      - passport-local: 1.0.0,
      - passport-local-mongoose: 4.2.1,
    - pug: 2.0.0-rc.3


---

## Author

[Toni Ruiz](https://github.com/devtoni)



