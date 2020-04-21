import { ServicesOptions } from '~/services/types';
import {
  AuthorityModel,
  CountryModel,
  RegionModel,
  BusinessTypeModel,
  EstablishmentModel,
} from '~/types/models';

export type HygieneServiceConstructor = (
  options: ServicesOptions,
) => HygieneService;

export interface HygieneService {
  getAuthorities: () => Promise<AuthorityModel[]>;
  getAuthority: (id: string) => Promise<AuthorityModel>;
  getBusinessTypes: () => Promise<BusinessTypeModel[]>;
  getBusinessType: (id: string) => Promise<BusinessTypeModel>;
  getCountries: () => Promise<CountryModel[]>;
  getCountry: (id: string) => Promise<CountryModel>;
  getEstablishments: () => Promise<EstablishmentModel[]>;
  getEstablishment: (id: string) => Promise<EstablishmentModel>;
  getRegions: () => Promise<RegionModel[]>;
  getRegion: (id: string) => Promise<RegionModel>;
}
