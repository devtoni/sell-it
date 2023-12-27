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
- Make

### Configuration `env` file

The app uses some environment variables that holds some secrets and other configuration stuff

You need to create a **.env** from the **.env.sample**, the credentials for cloudinary config should be up to you.

#### Additional step for deploy

In a real world you would not have to do this as the environment variables will probably come from other part, but here you will need to create a **.env.production** that uses the production values of your **.env** and exports them like:

```sh
export PORT=3000
```

This is because it is used in the `make deploy` process for the `envsubts`, there are alternatives like `include` the env  in the `Makefile` but it will pollute the environment variables of the terminal window you use.


### To run the server

```bash
make dev
```

This command will install all dependencies, boot the server and start up the docker-compose to have MongoDb available.

## Deployment (local)

More info [here](https://www.toniruiz.dev/blog/deploying-sell-it-locally) on why I deploy it locally.

### Deploy to minikube

By the moment this is what I do to deploy the app to minikube:

```bash
make deploy
```

This command will:

- Build and push docker image to the local registry `personal.local:5000`
- Apply kube files by replacing some env variables and placeholders (tag for the server image)
- Clean generated kube files

The local registry of Docker should be configured to allow Docker use insecure-hosts, also you would need to add `personal.local` to your `/etc/hosts`.
