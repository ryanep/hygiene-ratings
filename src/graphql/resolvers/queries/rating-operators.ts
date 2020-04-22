import { QueryResolvers } from '~types/resolvers';

export const ratingOperators: QueryResolvers['ratingOperators'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getRatingOperators();
};
