import { QueryResolvers } from '#/types/resolvers';
import { authorities } from './authorities';
import { authority } from './authority';
import { businessType } from './business-type';
import { businessTypes } from './business-types';
import { countries } from './countries';
import { country } from './country';
import { establishment } from './establishment';
import { establishments } from './establishments';
import { ratingOperators } from './rating-operators';
import { ratings } from './ratings';
import { region } from './region';
import { regions } from './regions';
import { schemeTypes } from './scheme-types';
import { sortOptions } from './sort-options';

export const Query: QueryResolvers = {
  authorities,
  authority,
  businessTypes,
  businessType,
  countries,
  country,
  establishments,
  establishment,
  ratings,
  ratingOperators,
  regions,
  region,
  schemeTypes,
  sortOptions,
};
