# Boilerplate Node.js + TypeScript + ESLint

This is a basic template for a Node.js project using TypeScript + ESLint and Vitest. It provides a basic structure to quickly start developing.

## Pre-requisites

- Node.js (versão >= 18.16.0)
- pnpm (optional, but recommended)

## Installation

Clone the repository:

```bash
git clone https://github.com/bdaseris/node-boilerplate.git
```

## Usage with docker

```sh
docker compose up -d
```

## Further commands (Docker)

- `docker compose down` (down the containers)
- `docker compose up -d <container_name>` (up the specified container)
- `docker compose exec -it app_backend /bin/bash` (enter in the container)

## Usage without docker

Install the dependencies:

```bash
pnpm install --frozen-lockfile
```

- To start the development server: `pnpm dev:server`
- To run the tests: `pnpm test`
- To generate test coverage: `pnpm test:coverage`
- To build the production version: `pnpm build` _not necessary on development_

## Typeorm

```sh
pnpm typeorm migration:generate -- -d ./src/persistences/typeorm/datasource.ts
pnpm typeorm migration:run -- -d ./src/persistences/typeorm/datasource.ts
pnpm typeorm migration:revert -- -d ./src/persistences/typeorm/datasource.ts
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
