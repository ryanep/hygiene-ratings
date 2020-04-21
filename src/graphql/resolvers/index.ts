import { Resolvers } from '~types/resolvers';
import { Authority } from './fields/authority';
import { Country } from './fields/country';
import { Region } from './fields/region';
import { Query } from './queries';

export const resolvers: Resolvers = {
  Authority,
  Country,
  Region,
  Query,
};
