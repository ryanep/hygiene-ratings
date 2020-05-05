import { SortOption } from '#/graphql/resolvers/fields/sort-option';
import { SortOptionModel } from '#/types/models';

describe('graphql/resolvers/fields/sort-option', () => {
  const sortOption: SortOptionModel = {
    sortOptionId: 1,
    sortOptionName: '__SORT_OPTION_NAME__',
    sortOptionKey: '__SORT_OPTION_KEY__',
    links: [
      {
        rel: '__LINK_REL__',
        href: '__LINK_HREF__',
      },
    ],
  };

  it('should return the expected values', () => {
    expect(SortOption.id(sortOption, null, null, null)).toBe('1');
    expect(SortOption.name(sortOption, null, null, null)).toBe(
      '__SORT_OPTION_NAME__',
    );
  });
});
