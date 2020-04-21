import { QueryResolvers } from '~types/resolvers';

export const authorities: QueryResolvers['authorities'] = (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getAuthorities();
};
