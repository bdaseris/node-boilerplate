FROM node:20.9-bullseye

WORKDIR /usr/src/app

COPY ./package.json ./pnpm-lock.yaml ./

## Install global packages
RUN npm i -g pnpm typescript

## Install packages
RUN pnpm i --frozen-lockfile

USER node

EXPOSE 4554

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost:4554/ || exit 1

ENTRYPOINT [ -d "node_modules" ] && pnpm dev:server || pnpm i --frozen-lockfile && pnpm dev:server