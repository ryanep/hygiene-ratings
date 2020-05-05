import { Establishment } from '#/graphql/resolvers/fields/establishment';
import { EstablishmentModel } from '#/types/models';

describe('graphql/resolvers/fields/establishment', () => {
  const establishment: EstablishmentModel = {
    FHRSID: 1,
    BusinessName: '__BUSINESS_NAME__',
    BusinessType: '__BUSINESS_TYPE__',
    BusinessTypeID: 2,
    AddressLine1: '__ADDRESS_LINE_1__',
    AddressLine2: '__ADDRESS_LINE_2__',
    AddressLine3: '__ADDRESS_LINE_3__',
    AddressLine4: '__ADDRESS_LINE_4__',
    PostCode: '__POSTCODE__',
    Phone: '__PHONE_NUMBER__',
    RatingValue: '__RATING_VALUE__',
    RatingKey: '__RATING_KEY_',
    RatingDate: '__RATING_DATE__',
    LocalAuthorityBusinessID: '__LOCAL_AUTHORITY_BUSINESS_ID__',
    LocalAuthorityCode: '__LOCAL_AUTHORITY_CODE__',
    LocalAuthorityName: '__LOCAL_AUTHORITY_NAME__',
    LocalAuthorityWebSite: '__LOCAL_AUTHORITY_WEB_SITE__',
    LocalAuthorityEmailAddress: '__LOCAL_AUTHORITY_EMAIL_ADDRESS__',
    scores: {
      Hygiene: 3,
      Structural: 4,
      ConfidenceInManagement: 5,
    },
    SchemeType: '__Scheme_Type__',
    geocode: {
      longitude: '__GEOCODE_LONGITUDE__',
      latitude: '__GEOCODE_LATITUDE__',
    },
    RightToReply: '__RIGHT_TO_REPLY__',
    Distance: 6,
    NewRatingPending: true,
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(Establishment.id(establishment, null, null, null)).toBe('1');
    expect(Establishment.name(establishment, null, null, null)).toBe(
      '__BUSINESS_NAME__',
    );
    expect(Establishment.name(establishment, null, null, null)).toBe(
      '__BUSINESS_NAME__',
    );
    expect(Establishment.type(establishment, null, null, null)).toBe(
      '__BUSINESS_TYPE__',
    );
    expect(Establishment.addressLineOne(establishment, null, null, null)).toBe(
      '__ADDRESS_LINE_1__',
    );
    expect(Establishment.addressLineTwo(establishment, null, null, null)).toBe(
      '__ADDRESS_LINE_2__',
    );
    expect(
      Establishment.addressLineTwo(
        { ...establishment, AddressLine2: null },
        null,
        null,
        null,
      ),
    ).toBe(null);
    expect(
      Establishment.addressLineThree(establishment, null, null, null),
    ).toBe('__ADDRESS_LINE_3__');
    expect(
      Establishment.addressLineThree(
        { ...establishment, AddressLine3: null },
        null,
        null,
        null,
      ),
    ).toBe(null);
    expect(Establishment.addressLineFour(establishment, null, null, null)).toBe(
      '__ADDRESS_LINE_4__',
    );
    expect(
      Establishment.addressLineFour(
        { ...establishment, AddressLine4: null },
        null,
        null,
        null,
      ),
    ).toBe(null);
    expect(Establishment.postcode(establishment, null, null, null)).toBe(
      '__POSTCODE__',
    );
    expect(Establishment.phoneNumber(establishment, null, null, null)).toBe(
      '__PHONE_NUMBER__',
    );
    expect(
      Establishment.phoneNumber(
        { ...establishment, Phone: null },
        null,
        null,
        null,
      ),
    ).toBe(null);
    expect(Establishment.rating(establishment, null, null, null)).toBe(
      '__RATING_VALUE__',
    );
    expect(Establishment.ratingDate(establishment, null, null, null)).toBe(
      '__RATING_DATE__',
    );
    expect(
      Establishment.geolocation(establishment, null, null, null),
    ).toStrictEqual({
      longitude: '__GEOCODE_LONGITUDE__',
      latitude: '__GEOCODE_LATITUDE__',
    });
    expect(
      Establishment.geolocation(
        { ...establishment, geocode: { longitude: null, latitude: null } },
        null,
        null,
        null,
      ),
    ).toBe(null);
    expect(
      Establishment.newRatingPending(establishment, null, null, null),
    ).toBe(true);
  });
});
