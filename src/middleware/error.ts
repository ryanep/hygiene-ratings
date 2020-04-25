import { RequestHandler } from 'express';

export const error: RequestHandler = (req, res) => {
  return res.status(404).json({
    status: 404,
    code: 'NOT FOUND',
    message: 'Route not found',
  });
};
