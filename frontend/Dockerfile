FROM docker.io/library/node:18.9.0
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]
