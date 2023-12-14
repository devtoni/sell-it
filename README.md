# Sell-it

Sell-it served as the culmination of my Fullstack Bootcamp experience at Skylab in 2017, it was a platform where users could effortlessly publish their items and communicate directly with those who expressed interest.

---

## What is this all about?

I wanted to rescue the project to play around for learning purposes and having fun, more info in my website [toniruiz.dev](https://www.toniruiz.dev)

## Installation

Before running the server, ensure you have MongoDb available. There is a docker-compose that enables it for you in case you don't want to have MongoDb locally.

**Requirements**:

- NodeJs v8
- Npm 6^
- Docker
- Cloudinary account

### Configuration `env` file

The app uses some environment variables that holds some secrets and other configuration stuff

You need to create a **.env** from the **.env.sample**, the credentials for cloudinary config should be up to you.

### To run the server

After having docker-compose up, run:

```bash
npm run dev
```
