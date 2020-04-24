import { QueryResolvers } from '#/types/resolvers';

export const ratings: QueryResolvers['ratings'] = async (root, args, context) => {
  return context.services.hygiene.getRatings();
};
