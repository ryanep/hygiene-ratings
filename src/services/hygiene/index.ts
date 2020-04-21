import { ServicesOptions } from '../types';
import { CountryModel, RegionModel, AuthorityModel } from '~types/models';
import { HygieneServiceConstructor } from './types';

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

export const hygieneService: HygieneServiceConstructor = (options) => ({
  getCountries: getCountries(options),
  getCountry: getCountry(options),
  getRegions: getRegions(options),
  getRegion: getRegion(options),
  getAuthorities: getAuthorities(options),
  getAuthority: getAuthority(options),
});
