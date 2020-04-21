import { CountryResolvers } from '~/types/resolvers';

export const Country: CountryResolvers = {
  id: (root) => root.id.toString(),
  name: (root) => root.name,
};
