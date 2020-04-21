import { QueryResolvers } from '~types/resolvers';

export const region: QueryResolvers['region'] = async (root, args, context) => {
  return context.services.hygiene.getRegion(args.id);
};
