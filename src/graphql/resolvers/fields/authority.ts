import { AuthorityResolvers } from '~/types/resolvers';

export const Authority: AuthorityResolvers = {
  id: (root) => root.LocalAuthorityId.toString(),
  name: (root) => root.Name,
  email: (root) => root.Email,
};
