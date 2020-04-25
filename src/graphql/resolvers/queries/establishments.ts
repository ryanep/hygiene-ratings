import { QueryResolvers } from '#/types/resolvers';

export const establishments: QueryResolvers['establishments'] = async (
  root,
  args,
  context,
) => {
  try {
    return await context.services.hygiene.getEstablishments(args);
  } catch (error) {
    return [];
  }
};
