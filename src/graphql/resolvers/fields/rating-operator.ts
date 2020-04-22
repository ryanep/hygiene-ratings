import { RatingOperatorResolvers } from '~/types/resolvers';

export const RatingOperator: RatingOperatorResolvers = {
  id: (root) => root.ratingOperatorId.toString(),
  name: (root) => root.ratingOperatorName,
};
