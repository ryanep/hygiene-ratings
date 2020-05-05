import { Country } from '#/graphql/resolvers/fields/country';
import { CountryModel } from '#/types/models';

describe('graphql/resolvers/fields/country', () => {
  const country: CountryModel = {
    id: 1,
    name: '__NAME__',
    nameKey: '__NAME_KEY__',
    code: '__CODE__',
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(Country.id(country, null, null, null)).toBe('1');
    expect(Country.name(country, null, null, null)).toBe('__NAME__');
  });
});
