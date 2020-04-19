export interface CountryModel {
  id: number;
  name: string;
  nameKey: string;
  code: string;
  links: {
    rel: string;
    href: string;
  }[];
}
