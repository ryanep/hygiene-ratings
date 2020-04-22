import { ServicesOptions } from '../types';
import {
  CountryModel,
  RegionModel,
  AuthorityModel,
  BusinessTypeModel,
  EstablishmentModel,
  SchemeTypeModel,
} from '~types/models';
import { HygieneServiceConstructor } from './types';

export const getAuthorities = (options: ServicesOptions) => async () => {
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

export const getAuthority = (options: ServicesOptions) => async (
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

export const getBusinessTypes = (options: ServicesOptions) => async () => {
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

export const getBusinessType = (options: ServicesOptions) => async (
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

const getCountries = (options: ServicesOptions) => async (): Promise<
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

export const getCountry = (options: ServicesOptions) => async (
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

const getEstablishments = (options: ServicesOptions) => async (): Promise<
  EstablishmentModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch.get<{ establishments: EstablishmentModel[] }>(
    `${endpoint}/establishments`,
    {
      headers: {
        'x-api-version': '2',
        'content-type': 'application/json',
      },
    },
  );
  return response.establishments;
};

const getEstablishment = (options: ServicesOptions) => async (
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

const getRegions = (options: ServicesOptions) => async (): Promise<
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

export const getRegion = (options: ServicesOptions) => async (
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

export const getSchemeTypes = (options: ServicesOptions) => async () => {
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

export const hygieneService: HygieneServiceConstructor = (options) => ({
  getAuthorities: getAuthorities(options),
  getAuthority: getAuthority(options),
  getBusinessTypes: getBusinessTypes(options),
  getBusinessType: getBusinessType(options),
  getCountries: getCountries(options),
  getCountry: getCountry(options),
  getEstablishments: getEstablishments(options),
  getEstablishment: getEstablishment(options),
  getRegions: getRegions(options),
  getRegion: getRegion(options),
  getSchemeTypes: getSchemeTypes(options),
});
