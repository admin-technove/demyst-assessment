FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nx build @demyst-assessment/frontend

FROM node:20

WORKDIR /app

RUN npm install -g http-server

COPY --from=builder /app/dist/frontend /app

COPY package*.json ./

RUN npm install --only=production

EXPOSE 3002

CMD ["http-server", "-p", "3002"]