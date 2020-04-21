import { fetch } from '~utils/fetch';
import { hygieneService } from '~/services/hygiene';
import { config } from '~/config';
import { ApolloContext } from './types';

export const context = (): ApolloContext => {
  return {
    services: {
      hygiene: hygieneService({ fetch, endpoint: config.api.API_ENDPOINT }),
    },
  };
};
