import { GeolocationResolvers } from '~/types/resolvers';

export const Geolocation: GeolocationResolvers = {
  longitude: (root) => root.longitude,
  latitude: (root) => root.latitude,
};
