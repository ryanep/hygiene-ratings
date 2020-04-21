import { QueryResolvers } from '~types/resolvers';

export const country: QueryResolvers['country'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getCountry(args.id);
};
