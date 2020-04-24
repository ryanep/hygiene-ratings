import './env';
import { createApp } from './app';
import { logger } from './utils/logger';
import { config } from './config';

const app = createApp();

app.listen(config.app.APP_PORT, () => {
  logger.info(`Server listening on port ${config.app.APP_PORT}`);
});
