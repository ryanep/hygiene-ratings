import { BusinessType } from '#/graphql/resolvers/fields/business-type';
import { BusinessTypeModel } from '#/types/models';

describe('graphql/resolvers/fields/business-type', () => {
  const businessType: BusinessTypeModel = {
    BusinessTypeId: '__BUSINESS_TYPE_ID__',
    BusinessTypeName: '__BUSINESS_TYPE__NAME',
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(BusinessType.id(businessType, null, null, null)).toBe(
      '__BUSINESS_TYPE_ID__',
    );
    expect(BusinessType.name(businessType, null, null, null)).toBe(
      '__BUSINESS_TYPE__NAME',
    );
  });
});
