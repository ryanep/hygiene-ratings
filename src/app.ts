import express from 'express';
import { middleware } from './middleware';

export const createApp = (): express.Application => {
  const app = express();
  app.use(...middleware);
  return app;
};
