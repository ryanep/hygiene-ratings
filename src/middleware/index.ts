import helmet from 'helmet';
import { apollo } from '../apollo';
import { router } from './router';
import { error } from './error';

export const middleware = [helmet(), apollo.getMiddleware(), router, error];
