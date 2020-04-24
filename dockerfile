FROM node:14.0.0-alpine
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./dist /app/dist
EXPOSE 3001
RUN NODE_ENV=production yarn
CMD node ./dist
