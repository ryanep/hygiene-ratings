import { QueryResolvers } from '~types/resolvers';

export const establishments: QueryResolvers['establishments'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getEstablishments();
};
