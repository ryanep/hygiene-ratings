import { ServicesOptions } from '../types';
import { CountryModel } from '~types/models';
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

export const hygiene: HygieneServiceConstructor = (options) => ({
  getCountries: getCountries(options),
  getCountry: getCountry(options),
});
