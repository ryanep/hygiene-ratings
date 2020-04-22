import { QueryResolvers } from '~types/resolvers';
import { authorities } from './authorities';
import { authority } from './authority';
import { businessTypes } from './business-types';
import { businessType } from './business-type';
import { countries } from './countries';
import { country } from './country';
import { establishments } from './establishments';
import { establishment } from './establishment';
import { regions } from './regions';
import { region } from './region';
import { schemeTypes } from './scheme-types';

export const Query: QueryResolvers = {
  authorities,
  authority,
  businessTypes,
  businessType,
  countries,
  country,
  establishments,
  establishment,
  regions,
  region,
  schemeTypes,
};
