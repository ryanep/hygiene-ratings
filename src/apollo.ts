import path from 'path';
import { logger } from '#/utils/logger';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { importSchema } from 'graphql-import';
import { context } from './graphql/context';
import { resolvers } from './graphql/resolvers';

const schemaPath = path.join(__dirname, './graphql/schema/**/*.graphql');
const typeDefs = importSchema(schemaPath);

export const formatError = (error: GraphQLError) => {
  logger.error(error);
  const { name, message, stack } = error;

  if (!name || !message) {
    return {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred',
      stack,
    };
  }

  return {
    name,
    message,
    stack,
  };
};

export const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  formatError,
  uploads: false,
  mocks: false,
});
