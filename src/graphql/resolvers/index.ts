import { Resolvers } from '~types/resolvers';
import { Authority } from './fields/authority';
import { BusinessType } from './fields/business-type';
import { Country } from './fields/country';
import { Establishment } from './fields/establishment';
import { Geolocation } from './fields/geolocation';
import { Region } from './fields/region';
import { SchemeType } from './fields/scheme-type';
import { Query } from './queries';

export const resolvers: Resolvers = {
  Authority,
  BusinessType,
  Country,
  Establishment,
  Geolocation,
  Region,
  SchemeType,
  Query,
};
