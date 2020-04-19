import { QueryResolvers } from '~types/resolvers';
import { countries } from './countries';
import { country } from './country';

export const Query: QueryResolvers = {
  countries,
  country,
};
