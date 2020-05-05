import { context } from '#/graphql/context';

describe('graphql/context', () => {
  it('should return services object', () => {
    const apolloContext = context();
    expect(apolloContext).toMatchObject({
      services: {
        hygiene: expect.any(Object),
      },
    });
  });
});
