import { QueryResolvers } from '~types/resolvers';

export const sortOptions: QueryResolvers['sortOptions'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getSortOptions();
};
