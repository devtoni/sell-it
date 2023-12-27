# Seed

Playwright project that consists on executing a test that will register N Users with N products each.

## Install deps

This project is part of the global workspace, to install the deps, just run from root or project dir.

```sh
pnpm install
```

## Execute seed

In order to execute the Seed, you will firstly need to create a `.env` file with the `.env.example`, here you will find

```sh
BASE_URL=<base-url-of-sell-it-project-running>
USERS=<number-of-users-to-create>
PRODUCTS_BY_USER=<number-of-products-added-by-user>
```

### Run Script

```sh
pnpm run -r seed
```

This command will execute the test in headless mode, with the configuration provided in `.env`
