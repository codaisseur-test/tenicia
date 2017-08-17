# 1. Start with the Alpine Node image, version 8.4
FROM mhart/alpine-node:8.4

# 2. Create app directory
WORKDIR /usr/src/app

# 3. Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# 4. Bundle app source
COPY . .

# 5. Expose & run
EXPOSE 1234
CMD [ "node", "." ]
