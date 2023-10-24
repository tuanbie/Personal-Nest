FROM node:18.16.0-alpine AS development
WORKDIR /usr/src/app
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json yarn.lock ./
RUN yarn install
COPY --chown=node:node . .
RUN yarn run build
USER node

# BUILD
FROM node:18.16.0-alpine
WORKDIR /usr/src/app
ENV NODE_ENV=development
COPY --chown=node:node package*.json yarn.lock ./
RUN yarn install --production
# COPY node_modules from previous stage to build
COPY --chown=node:node . .
COPY --chown=node:node --from=development /usr/src/app/dist ./dist
USER node

CMD [ "node", "dist/main.js" ]