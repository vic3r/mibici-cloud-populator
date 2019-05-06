FROM node:alpine

RUN npm install yarn
COPY . .
RUN yarn install

ENTRYPOINT ["yarn", "start"]