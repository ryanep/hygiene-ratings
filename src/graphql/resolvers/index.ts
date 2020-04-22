import { Resolvers } from '~types/resolvers';
import { Authority } from './fields/authority';
import { BusinessType } from './fields/business-type';
import { Country } from './fields/country';
import { Establishment } from './fields/establishment';
import { Geolocation } from './fields/geolocation';
import { Rating } from './fields/rating';
import { RatingOperator } from './fields/rating-operator';
import { Region } from './fields/region';
import { SchemeType } from './fields/scheme-type';
import { SortOption } from './fields/sort-option';
import { Query } from './queries';

export const resolvers: Resolvers = {
  Authority,
  BusinessType,
  Country,
  Establishment,
  Geolocation,
  Rating,
  RatingOperator,
  Region,
  SchemeType,
  SortOption,
  Query,
};
