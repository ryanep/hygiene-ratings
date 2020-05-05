import path from 'path';
import gql from 'graphql-tag';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { importSchema } from 'graphql-import';
import { resolvers } from '#/graphql/resolvers';
import { ApolloContext } from '#/graphql/context/types';

describe('integration', () => {
  const schemaPath = path.join(
    __dirname,
    '../../src/graphql/schema/**/*.graphql',
  );
  const typeDefs = importSchema(schemaPath);
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: (): Partial<ApolloContext> => ({
      services: {
        // @ts-ignore
        hygiene: {
          getAuthorities: async () => [
            {
              LocalAuthorityId: 1,
              LocalAuthorityIdCode: 'LocalAuthorityIdCode',
              Name: 'Name',
              FriendlyName: 'FriendlyName',
              Url: 'Url',
              SchemeUrl: 'SchemeUrl',
              Email: 'Email',
              RegionName: 'RegionName',
              FileName: 'FileName',
              FileNameWelsh: 'FileName',
              EstablishmentCount: 2,
              CreationDate: new Date('2020-01-01'),
              LastPublishedDate: new Date('2020-01-01'),
              SchemeType: 3,
              links: [
                {
                  rel: 'rel',
                  href: 'href',
                },
              ],
            },
          ],
        },
      },
    }),
  });
  const { query } = createTestClient(apollo);

  it('authorities', async () => {
    const AUTHORITIES_QUERY = gql`
      query authorities {
        authorities {
          id
          name
          email
        }
      }
    `;
    const res = await query({ query: AUTHORITIES_QUERY });
    expect(res.data).toMatchSnapshot();
  });
});
