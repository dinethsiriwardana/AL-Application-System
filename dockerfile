FROM node:20-alpine

WORKDIR /app

COPY package.json* ./

RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

COPY . .


RUN npm run build

USER 10014
EXPOSE 3000

ENV HOSTNAME 0.0.0.0
ENV PORT 3000

CMD ["./node_modules/.bin/next", "start"]

