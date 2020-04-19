import { getApolloServer } from '~/apollo';

export const apollo = () => {
  const server = getApolloServer();
  return server.getMiddleware();
};
