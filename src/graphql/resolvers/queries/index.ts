import { QueryResolvers } from '~types/resolvers';
import { authorities } from './authorities';
import { authority } from './authority';
import { countries } from './countries';
import { country } from './country';
import { regions } from './regions';
import { region } from './region';

export const Query: QueryResolvers = {
  authorities,
  authority,
  countries,
  country,
  regions,
  region,
};
