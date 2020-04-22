import { QueryResolvers } from '~types/resolvers';

export const establishments: QueryResolvers['establishments'] = async (
  root,
  args,
  context,
) => {
  try {
    const establishments = await context.services.hygiene.getEstablishments(args);
    return establishments;
  } catch (error) {
    return [];
  }
};
