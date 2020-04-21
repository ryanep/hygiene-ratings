import { QueryResolvers } from '~types/resolvers';

export const businessTypes: QueryResolvers['businessTypes'] = (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getBusinessTypes();
};
