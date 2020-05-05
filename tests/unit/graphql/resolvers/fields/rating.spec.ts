import { Rating } from '#/graphql/resolvers/fields/rating';
import { RatingModel, SchemeTypeModel } from '#/types/models';

describe('graphql/resolvers/fields/rating', () => {
  const rating: RatingModel = {
    ratingId: 1,
    ratingName: '__RATING_NAME__',
    ratingKey: '__RATING_KEY__',
    ratingKeyName: '__RATING_KEY_NAME__',
    schemeTypeId: 2,
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };
  const schemaTypes: SchemeTypeModel[] = [
    {
      schemeTypeid: 2,
      schemeTypeName: '__SCHEME_TYPE_NAME__',
      schemeTypeKey: '__SCHEME_TYPE_KEY__',
      links: [
        {
          rel: '__LINK_REL__',
          href: '__LINK_HREF__',
        },
      ],
    },
  ];

  it('should return the expected values', async () => {
    expect(Rating.id(rating, null, null, null)).toBe('1');
    expect(Rating.name(rating, null, null, null)).toBe('__RATING_NAME__');
    expect(
      await Rating.schemaType(
        rating,
        null,
        // @ts-ignore
        { services: { hygiene: { getSchemeTypes: () => schemaTypes } } },
        null,
      ),
    ).toStrictEqual({
      schemeTypeid: 2,
      schemeTypeName: '__SCHEME_TYPE_NAME__',
      schemeTypeKey: '__SCHEME_TYPE_KEY__',
      links: [{ rel: '__LINK_REL__', href: '__LINK_HREF__' }],
    });
  });
});
