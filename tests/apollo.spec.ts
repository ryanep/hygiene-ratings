import { GraphQLError } from 'graphql';
import { formatError } from '../src/apollo';

describe('apollo', () => {
  describe('formatError', () => {
    it('should return expected error when given a name and message', () => {
      const graphqlError = new GraphQLError('__ERROR_MESSAGE__');
      const error = formatError(graphqlError);
      expect(error).toMatchObject({
        name: 'GraphQLError',
        message: '__ERROR_MESSAGE__',
      });
    });

    it('should return internal error when given an error without a name', () => {
      const graphqlError = {
        name: '',
        message: '__ERROR_MESSAGE__',
      };
      // @ts-ignore
      const error = formatError(graphqlError);
      expect(error).toMatchObject({
        name: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
      });
    });
  });
});
