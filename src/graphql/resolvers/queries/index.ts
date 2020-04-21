import { QueryResolvers } from '~types/resolvers';
import { countries } from './countries';
import { country } from './country';
import { regions } from './regions';
import { region } from './region';

export const Query: QueryResolvers = {
  countries,
  country,
  regions,
  region,
};
