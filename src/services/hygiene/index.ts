import querystring from 'query-string';
import {
  AuthorityModel,
  BusinessTypeModel,
  CountryModel,
  EstablishmentModel,
  RatingModel,
  RatingOperatorModel,
  RegionModel,
  SchemeTypeModel,
  SortOptionModel,
} from '#/types/models';
import {
  EstablishmentFilterOptions,
  HygieneServiceConstructor,
  HygieneServicesOptions,
} from './types';

export const getAuthorities = (options: HygieneServicesOptions) => async () => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ authorities: AuthorityModel[] }>(
    `${endpoint}/authorities`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.authorities;
};

export const getAuthority = (options: HygieneServicesOptions) => async (
  id: string,
) => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<AuthorityModel>(
    `${endpoint}/authorities/${id}`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response;
};

export const getBusinessTypes = (
  options: HygieneServicesOptions,
) => async () => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ businessTypes: BusinessTypeModel[] }>(
    `${endpoint}/businessTypes`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.businessTypes;
};

export const getBusinessType = (options: HygieneServicesOptions) => async (
  id: string,
) => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<BusinessTypeModel>(
    `${endpoint}/businessTypes/${id}`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response;
};

const getCountries = (options: HygieneServicesOptions) => async (): Promise<
  CountryModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ countries: CountryModel[] }>(
    `${endpoint}/countries`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.countries;
};

export const getCountry = (options: HygieneServicesOptions) => async (
  id: string,
): Promise<CountryModel> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<CountryModel>(
    `${endpoint}/countries/${id}`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response;
};

const getEstablishments = (options: HygieneServicesOptions) => async (
  filters: EstablishmentFilterOptions,
): Promise<EstablishmentModel[]> => {
  const { endpoint, fetch } = options;
  const query = querystring.stringify(filters);
  const response = await fetch.get<{ establishments: EstablishmentModel[] }>(
    `${endpoint}/establishments?${query}`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.establishments;
};

const getEstablishment = (options: HygieneServicesOptions) => async (
  id: string,
): Promise<EstablishmentModel> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<EstablishmentModel>(
    `${endpoint}/establishments/${id}`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response;
};

const getRatings = (options: HygieneServicesOptions) => async (): Promise<
  RatingModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ ratings: RatingModel[] }>(
    `${endpoint}/ratings`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.ratings;
};

const getRatingOperators = (
  options: HygieneServicesOptions,
) => async (): Promise<RatingOperatorModel[]> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ ratingOperator: RatingOperatorModel[] }>(
    `${endpoint}/ratingOperators`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.ratingOperator;
};

const getRegions = (options: HygieneServicesOptions) => async (): Promise<
  RegionModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ regions: RegionModel[] }>(
    `${endpoint}/regions`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.regions;
};

export const getRegion = (options: HygieneServicesOptions) => async (
  id: string,
): Promise<RegionModel> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<RegionModel>(`${endpoint}/regions/${id}`, {
    headers: {
      'x-api-version': '2',
      'content-type': 'application/json',
    },
  });
  return response;
};

export const getSchemeTypes = (options: HygieneServicesOptions) => async () => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ schemeTypes: SchemeTypeModel[] }>(
    `${endpoint}/schemeTypes`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.schemeTypes;
};

export const getSortOptions = (options: HygieneServicesOptions) => async () => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ sortOptions: SortOptionModel[] }>(
    `${endpoint}/sortOptions`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.sortOptions;
};

export const hygieneService: HygieneServiceConstructor = (options) => ({
  getAuthorities: getAuthorities(options),
  getAuthority: getAuthority(options),
  getBusinessTypes: getBusinessTypes(options),
  getBusinessType: getBusinessType(options),
  getCountries: getCountries(options),
  getCountry: getCountry(options),
  getEstablishments: getEstablishments(options),
  getEstablishment: getEstablishment(options),
  getRatings: getRatings(options),
  getRatingOperators: getRatingOperators(options),
  getRegions: getRegions(options),
  getRegion: getRegion(options),
  getSchemeTypes: getSchemeTypes(options),
  getSortOptions: getSortOptions(options),
});
