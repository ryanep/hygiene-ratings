import { SortOptionResolvers } from '#/types/resolvers';

export const SortOption: SortOptionResolvers = {
  id: (root) => root.sortOptionId.toString(),
  name: (root) => root.sortOptionName,
};
