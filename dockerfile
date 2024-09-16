FROM node:20

RUN apt-get update && \
    apt-get install -y git=1:2.39.5-0+deb12u1 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

USER 10014
EXPOSE 3000

ENV HOSTNAME 0.0.0.0
ENV PORT 3000

CMD ["./node_modules/.bin/next", "start"]