import fetch from 'node-fetch';
import { ApolloContext } from './types';
import { hygiene } from '~/services/hygiene';
import { config } from '~/config';

export const context = (): ApolloContext => {
  return {
    services: {
      hygiene: hygiene({ fetch, endpoint: config.api.API_ENDPOINT }),
    },
  };
};
