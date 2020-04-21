import fetch from 'node-fetch';
import { ApolloContext } from './types';
import { hygieneService } from '~/services/hygiene';
import { config } from '~/config';

export const context = (): ApolloContext => {
  return {
    services: {
      hygiene: hygieneService({ fetch, endpoint: config.api.API_ENDPOINT }),
    },
  };
};
