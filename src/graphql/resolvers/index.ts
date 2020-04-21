import { Resolvers } from '~types/resolvers';
import { Country } from './fields/country';
import { Region } from './fields/region';
import { Query } from './queries';

export const resolvers: Resolvers = {
  Country,
  Region,
  Query,
};
