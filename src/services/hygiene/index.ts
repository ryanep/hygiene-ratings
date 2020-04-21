import { ServicesOptions } from '../types';
import { CountryModel, RegionModel } from '~types/models';
import { HygieneServiceConstructor } from './types';

const getCountries = (options: ServicesOptions) => async (): Promise<
  CountryModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch(`${endpoint}/countries`, {
    headers: {
      'x-api-version': '2',
      'content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data.countries;
};

export const getCountry = (options: ServicesOptions) => async (
  id: string,
): Promise<CountryModel> => {
  const { endpoint, fetch } = options;
  const response = await fetch(`${endpoint}/countries/${id}`, {
    headers: {
      'x-api-version': '2',
      'content-type': 'application/json',
    },
  });
  const country = await response.json();
  return country;
};

const getRegions = (options: ServicesOptions) => async (): Promise<
  RegionModel[]
> => {
  const { endpoint, fetch } = options;
  const response = await fetch(`${endpoint}/regions`, {
    headers: {
      'x-api-version': '2',
      'content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data.regions;
};

export const getRegion = (options: ServicesOptions) => async (
  id: string,
): Promise<RegionModel> => {
  const { endpoint, fetch } = options;
  const response = await fetch(`${endpoint}/regions/${id}`, {
    headers: {
      'x-api-version': '2',
      'content-type': 'application/json',
    },
  });
  const region = await response.json();
  return region;
};

export const hygieneService: HygieneServiceConstructor = (options) => ({
  getCountries: getCountries(options),
  getCountry: getCountry(options),
  getRegions: getRegions(options),
  getRegion: getRegion(options),
});
