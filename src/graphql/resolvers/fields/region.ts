import { RegionResolvers } from '#/types/resolvers';

export const Region: RegionResolvers = {
  id: (root) => root.id.toString(),
  name: (root) => root.name,
};
