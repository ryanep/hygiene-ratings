import express from 'express';
import { middleware } from './middleware';

export const createApp = (): express.Application => {
  const app = express();
  app.use(...middleware);

  app.get('/health', (req, res) => {
    res.json({
      status: 200,
    });
  });

  return app;
};
