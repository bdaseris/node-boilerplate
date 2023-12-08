# Boilerplate Node.js + TypeScript + ESLint

This is a basic template for a Node.js project using TypeScript + ESLint and Vitest. It provides a basic structure to quickly start developing.

## Pre-requisites

- Node.js (versão >= 18.16.0)
- pnpm (optionnel, mais recommandé)

## Installation

1. Clone the repository:

  ```bash
    git clone https://github.com/bdaseris/node-boilerplate.git
  ```

2. Install the dependencies:

  ```bash
    pnpm install --frozen-lockfile
  ```

## Usage locally

- To start the development server: `pnpm dev:server`
- To run the tests: `pnpm test`
- To generate test coverage: `pnpm test:coverage`
- To build the production version: `pnpm build`

## Usage with docker

```sh
docker compose up -d --build
```

## Further commands (Docker)

- `docker compose down` (down the containers)
- `docker compose up -d` (up again the containers) *not necessary to rebuild*
- `docker compose exec -it app_backend /bin/bash` (enter in the container)

## Typeorm

```sh
pnpm typeorm migration:generate -- -d ./src/infra/persistences/typeorm/datasource.ts
pnpm typeorm migration:run -- -d ./src/infra/persistences/typeorm/datasource.ts
pnpm typeorm migration:revert -- -d ./src/infra/persistences/typeorm/datasource.ts
```

## Configuration

This project uses the following technologies and tools:

- Node.js
- TypeScript
- ESLint
- Vitest

The ESLint configuration can be found in the `.eslintrc.json`.

## Contribution

Feel free to contribute to the improvement of this project. Simply open a pull request with your modifications.

## Licence

This project is licensed under the ISC license. See the LICENSE file for more information.
