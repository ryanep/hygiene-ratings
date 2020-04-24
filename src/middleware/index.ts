import helmet from 'helmet';
import { apollo } from '../apollo';
import { error } from './error';

export const middleware = [helmet(), apollo.getMiddleware(), error];
