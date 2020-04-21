import { QueryResolvers } from '~types/resolvers';

export const countries: QueryResolvers['countries'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getCountries();
};
