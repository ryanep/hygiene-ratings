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

export interface RegionModel {
  id: number;
  name: string;
  nameKey: string;
  code: string;
  links: {
    rel: string;
    href: string;
  }[];
}

export interface AuthorityModel {
  LocalAuthorityId: number;
  LocalAuthorityIdCode: string;
  Name: string;
  FriendlyName: string;
  Url: string;
  SchemeUrl: string;
  Email: string;
  RegionName: string;
  FileName: string;
  FileNameWelsh: string;
  EstablishmentCount: number;
  CreationDate: Date;
  LastPublishedDate: Date;
  SchemeType: number;
  links: {
    rel: string;
    href: string;
  }[];
}
