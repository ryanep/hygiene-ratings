import { BusinessTypeResolvers } from '~/types/resolvers';

export const BusinessType: BusinessTypeResolvers = {
  id: (root) => root.BusinessTypeId,
  name: (root) => root.BusinessTypeName,
};
