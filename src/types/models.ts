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

export interface BusinessTypeModel {
  BusinessTypeId: string;
  BusinessTypeName: string;
  links: {
    rel: string;
    href: string;
  }[];
}

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

export interface EstablishmentModel {
  FHRSID: number;
  BusinessName: string;
  BusinessType: string;
  BusinessTypeID: number;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  AddressLine4: string;
  PostCode: string;
  Phone: string;
  RatingValue: string;
  RatingKey: string;
  RatingDate: string;
  LocalAuthorityBusinessID: string;
  LocalAuthorityCode: string;
  LocalAuthorityName: string;
  LocalAuthorityWebSite: string;
  LocalAuthorityEmailAddress: string;
  scores: {
    Hygiene: number;
    Structural: number;
    ConfidenceInManagement: number;
  };
  SchemeType: string;
  geocode: {
    longitude?: string;
    latitude?: string;
  };
  RightToReply: string;
  Distance?: number;
  NewRatingPending: boolean;
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

export interface SchemeTypeModel {
  schemeTypeid: number;
  schemeTypeName: string;
  schemeTypeKey: string;
  links: {
    rel: string;
    href: string;
  }[];
}

export interface SortOptionModel {
  sortOptionId: number;
  sortOptionName: string;
  sortOptionKey: string;
  links: {
    rel: string;
    href: string;
  }[];
}

export interface RatingModel {
  ratingId: number;
  ratingName: string;
  ratingKey: string;
  ratingKeyName: string;
  schemeTypeId: number;
  links: {
    rel: string;
    href: string;
  }[];
}

export interface RatingOperatorModel {
  ratingOperatorId: number;
  ratingOperatorName: string;
  ratingOperatorKey: string;
  links: {
    rel: string;
    href: string;
  }[];
}
