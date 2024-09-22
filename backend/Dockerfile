FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx nx build @demyst-assessment/backend

FROM node:20

WORKDIR /app

COPY --from=builder /app/dist/backend /app

COPY package*.json ./

RUN npm install --only=production

EXPOSE 3001

# Start the application
CMD ["node", "main.js"]