FROM node:20.17.0-alpine AS base

# Установка дополнительных утилит (опционально)
RUN apk add --no-cache bash

# Задать рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости через npm
RUN npm install

# Копируем оставшиеся файлы проекта
COPY . .

# Генерируем код через graphql-codegen
RUN npx graphql-codegen --config graphql.config.ts

# Сборка проекта
RUN npm run build

# Приложение будет слушать порт 3000
EXPOSE 3000

# Команда запуска контейнера
CMD ["npm", "run", "start"]