import { RatingResolvers } from '#/types/resolvers';

export const Rating: RatingResolvers = {
  id: (root) => root.ratingId.toString(),
  name: (root) => root.ratingName,
  schemaType: async (root, args, context) => {
    const types = await context.services.hygiene.getSchemeTypes();
    const type = types.find(
      (schemaType) => schemaType.schemeTypeid === root.ratingId,
    );
    return type;
  },
};
