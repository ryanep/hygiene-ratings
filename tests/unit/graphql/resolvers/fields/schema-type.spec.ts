import { SchemeType } from '#/graphql/resolvers/fields/scheme-type';
import { SchemeTypeModel } from '#/types/models';

describe('graphql/resolvers/fields/schema-type', () => {
  const schemaType: SchemeTypeModel = {
    schemeTypeid: 1,
    schemeTypeName: '__SCHEME_TYPE_NAME__',
    schemeTypeKey: '__SCHEME_TYPE_KEY__',
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(SchemeType.id(schemaType, null, null, null)).toBe('1');
    expect(SchemeType.name(schemaType, null, null, null)).toBe(
      '__SCHEME_TYPE_NAME__',
    );
  });
});
