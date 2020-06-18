import { createApp } from './app';
import './env';
import { config } from './config';
import { logger } from './utils/logger';

const app = createApp();

app.listen(config.app.APP_PORT, () => {
  logger.info(`Server listening on port ${config.app.APP_PORT}`);
});
