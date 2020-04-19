import { RequestHandler } from 'express';

export const error: RequestHandler = (req, res) => {
  return res.json({
    status: 404,
    message: 'Invalid route',
  });
};
