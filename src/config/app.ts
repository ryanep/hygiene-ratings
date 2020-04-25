import { AppConfig } from './types';

export const app: AppConfig = {
  APP_PORT: parseInt(process.env.APP_PORT, 10) || 3001,
};
