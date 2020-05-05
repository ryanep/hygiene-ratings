import { RatingOperator } from '#/graphql/resolvers/fields/rating-operator';
import { RatingOperatorModel } from '#/types/models';

describe('graphql/resolvers/fields/rating-operator', () => {
  const ratingOperator: RatingOperatorModel = {
    ratingOperatorId: 1,
    ratingOperatorName: '__RATING_OPERATOR_NAME__',
    ratingOperatorKey: '__RATING_OPERATOR_KEY__',
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(RatingOperator.id(ratingOperator, null, null, null)).toBe('1');
    expect(RatingOperator.name(ratingOperator, null, null, null)).toBe(
      '__RATING_OPERATOR_NAME__',
    );
  });
});
