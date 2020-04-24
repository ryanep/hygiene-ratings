import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { importSchema } from 'graphql-import';
import { logger } from '~/utils/logger';
import { resolvers } from './graphql/resolvers';
import { context } from './graphql/context';

const schemaPath = path.join(__dirname, './graphql/schema/**/*.graphql');
const typeDefs = importSchema(schemaPath);

const formatError = (error: GraphQLError) => {
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
});
