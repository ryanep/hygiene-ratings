import { QueryResolvers } from '#/types/resolvers';

export const schemeTypes: QueryResolvers['schemeTypes'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getSchemeTypes();
};
