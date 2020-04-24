import { EstablishmentResolvers } from '#/types/resolvers';

export const Establishment: EstablishmentResolvers = {
  id: (root) => root.FHRSID.toString(),
  name: (root) => root.BusinessName,
  type: (root) => root.BusinessType,
  addressLineOne: (root) => root.AddressLine1,
  addressLineTwo: (root) => (!!root.AddressLine2 ? root.AddressLine2 : null),
  addressLineThree: (root) => (!!root.AddressLine3 ? root.AddressLine3 : null),
  addressLineFour: (root) => (!!root.AddressLine4 ? root.AddressLine4 : null),
  postcode: (root) => root.PostCode,
  phoneNumber: (root) => !!root.Phone ? root.Phone : null,
  rating: (root) => root.RatingValue,
  ratingDate: (root) => root.RatingDate,
  geolocation: (root) => ({
    longitude: root.geocode.longitude,
    latitude: root.geocode.latitude,
  }),
  newRatingPending: (root) => root.NewRatingPending,
};
