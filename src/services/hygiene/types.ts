import { Fetch } from '#/utils/fetch/types';
import {
  AuthorityModel,
  CountryModel,
  RegionModel,
  BusinessTypeModel,
  EstablishmentModel,
  SchemeTypeModel,
  SortOptionModel,
  RatingModel,
  RatingOperatorModel,
} from '#/types/models';

export interface HygieneServicesOptions {
  fetch: Fetch;
  endpoint: string;
}

export type HygieneServiceConstructor = (
  options: HygieneServicesOptions,
) => HygieneService;

export interface HygieneService {
  getAuthorities: () => Promise<AuthorityModel[]>;
  getAuthority: (id: string) => Promise<AuthorityModel>;
  getBusinessTypes: () => Promise<BusinessTypeModel[]>;
  getBusinessType: (id: string) => Promise<BusinessTypeModel>;
  getCountries: () => Promise<CountryModel[]>;
  getCountry: (id: string) => Promise<CountryModel>;
  getEstablishments: (
    filters: EstablishmentFilterOptions,
  ) => Promise<EstablishmentModel[]>;
  getEstablishment: (id: string) => Promise<EstablishmentModel>;
  getRatings: () => Promise<RatingModel[]>;
  getRatingOperators: () => Promise<RatingOperatorModel[]>;
  getRegions: () => Promise<RegionModel[]>;
  getRegion: (id: string) => Promise<RegionModel>;
  getSchemeTypes: () => Promise<SchemeTypeModel[]>;
  getSortOptions: () => Promise<SortOptionModel[]>;
}

export interface EstablishmentFilterOptions {
  name?: string;
  address?: string;
  longitude?: string;
  latitude?: string;
  maxDistanceLimit?: string;
  businessTypeId?: string;
  schemeTypeKey?: string;
  ratingKey?: string;
  ratingOperatorKey?: string;
  localAuthorityId?: string;
  countryId?: string;
  sortOptionKey?: string;
  pageNumber?: number;
  pageSize?: number;
}
