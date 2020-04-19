FROM node:12.16.2-alpine
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./dist /app/dist
EXPOSE 3001
RUN NODE_ENV=production yarn
CMD node ./dist
