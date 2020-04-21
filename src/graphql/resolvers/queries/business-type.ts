import { QueryResolvers } from '~types/resolvers';

export const businessType: QueryResolvers['businessType'] = (
  root,
  args,
  context,
) => {
  return context.services.hygiene.getBusinessType(args.id);
};
