import { ServicesOptions } from '~/services/types';
import { AuthorityModel, CountryModel, RegionModel } from '~/types/models';

export type HygieneServiceConstructor = (
  options: ServicesOptions,
) => HygieneService;

export interface HygieneService {
  getCountries: () => Promise<CountryModel[]>;
  getCountry: (id: string) => Promise<CountryModel>;
  getRegions: () => Promise<RegionModel[]>;
  getRegion: (id: string) => Promise<RegionModel>;
  getAuthorities: () => Promise<AuthorityModel[]>;
  getAuthority: (id: string) => Promise<AuthorityModel>;
}
