FROM alpine:3.14
RUN apk add --no-cache npm
WORKDIR /usr/src/frontend
COPY . .
RUN ls -a
RUN npm i
CMD npm run host
