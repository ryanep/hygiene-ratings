import { QueryResolvers } from '#/types/resolvers';

export const regions: QueryResolvers['regions'] = async (root, args, context) => {
  return context.services.hygiene.getRegions();
};
