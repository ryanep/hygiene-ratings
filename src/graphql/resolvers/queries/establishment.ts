import { QueryResolvers } from '~types/resolvers';

export const establishment: QueryResolvers['establishment'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getEstablishment(args.id);
};
