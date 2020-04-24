import { SchemeTypeResolvers } from '#/types/resolvers';

export const SchemeType: SchemeTypeResolvers = {
  id: (root) => root.schemeTypeid.toString(),
  name: (root) => root.schemeTypeName,
};
