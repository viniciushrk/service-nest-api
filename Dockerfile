# Usar a imagem base oficial do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar os arquivos do package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código do aplicativo
COPY . .

# Build do projeto
RUN npm run build

# Expor a porta padrão do aplicativo (ajuste conforme necessário)
EXPOSE 3000

# Definir o comando de inicialização do contêiner
CMD ["npm", "run", "start:dev"]