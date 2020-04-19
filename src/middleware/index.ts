import { RequestHandler } from 'express';
import helmet from 'helmet';
import { apollo } from './apollo';
import { error } from './error';

export const middleware = (): RequestHandler[] => {
  return [helmet(), apollo(), error];
};
