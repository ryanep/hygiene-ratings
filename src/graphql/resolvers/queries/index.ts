import { QueryResolvers } from '#/types/resolvers';
import { authorities } from './authorities';
import { authority } from './authority';
import { businessTypes } from './business-types';
import { businessType } from './business-type';
import { countries } from './countries';
import { country } from './country';
import { establishments } from './establishments';
import { establishment } from './establishment';
import { ratings } from './ratings';
import { ratingOperators } from './rating-operators';
import { regions } from './regions';
import { region } from './region';
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
