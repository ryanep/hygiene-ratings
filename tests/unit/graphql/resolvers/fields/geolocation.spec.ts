import { Geolocation } from '#/graphql/resolvers/fields/geolocation';

describe('graphql/resolvers/fields/geolocation', () => {
  const geolocation = {
    latitude: '__LATITUDE__',
    longitude: '__LONGITUDE__',
  };

  it('should return the expected values', () => {
    expect(Geolocation.latitude(geolocation, null, null, null)).toBe(
      '__LATITUDE__',
    );
    expect(Geolocation.longitude(geolocation, null, null, null)).toBe(
      '__LONGITUDE__',
    );
  });
});
