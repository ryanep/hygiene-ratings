import helmet from 'helmet';
import { apollo } from '../apollo';
import { error } from './error';
import { router } from './router';

export const middleware = [helmet(), apollo.getMiddleware(), router, error];
