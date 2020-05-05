import { Authority } from '#/graphql/resolvers/fields/authority';
import { AuthorityModel } from '#/types/models';

describe('graphql/resolvers/fields/authority', () => {
  const authority: AuthorityModel = {
    LocalAuthorityId: 1,
    LocalAuthorityIdCode: '__LOCAL_AUTHORITY_ID_CODE__',
    Name: '__NAME__',
    FriendlyName: '__FRIENDLY_NAME__',
    Url: '__URL__',
    SchemeUrl: '__SCHEME_URL__',
    Email: '__EMAIL__',
    RegionName: '__REGION_NAME__',
    FileName: '__FILE_NAME__',
    FileNameWelsh: '__FILE_NAME_WELSH__',
    EstablishmentCount: 2,
    CreationDate: new Date('2020-01-01'),
    LastPublishedDate: new Date('2020-01-02'),
    SchemeType: 3,
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(Authority.id(authority, null, null, null)).toBe('1');
    expect(Authority.name(authority, null, null, null)).toBe('__NAME__');
    expect(Authority.email(authority, null, null, null)).toBe('__EMAIL__');
  });
});
