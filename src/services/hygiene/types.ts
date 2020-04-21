import { ServicesOptions } from '~/services/types';
import { CountryModel } from '~/types/models';
import { RegionModel } from '~/types/models';

export type HygieneServiceConstructor = (
  options: ServicesOptions,
) => CountryService;

export interface CountryService {
  getCountries: () => Promise<CountryModel[]>;
  getCountry: (id: string) => Promise<CountryModel>;
  getRegions: () => Promise<RegionModel[]>;
  getRegion: (id: string) => Promise<RegionModel>;
}
