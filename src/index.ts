import './env';
import { createApp } from './app';
import { logger } from './utils/logger';
import { createApolloServer } from '~apollo';

const init = async () => {
  await createApolloServer();
  const app = createApp();

  app.listen(3001, () => {
    logger.info(`Server listening on port ${3001}`);
  });
};

init();
