import { Region } from '#/graphql/resolvers/fields/region';
import { RegionModel } from '#/types/models';

describe('graphql/resolvers/fields/region', () => {
  const region: RegionModel = {
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
    expect(Region.id(region, null, null, null)).toBe('1');
    expect(Region.name(region, null, null, null)).toBe('__NAME__');
  });
});
