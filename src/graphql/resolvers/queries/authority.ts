import { QueryResolvers } from '~types/resolvers';

export const authority: QueryResolvers['authority'] = async (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getAuthority(args.id);
};
