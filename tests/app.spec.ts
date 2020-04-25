import supertest from 'supertest';
import { createApp } from '#/app';

describe('app', () => {
  describe('createApp', () => {
    it('should return the expected listen function', () => {
      const app = createApp();
      expect(typeof app.listen).toBe('function');
    });

    it('should return a 200 status code when requesting the health route', async () => {
      const app = createApp();
      const response = await supertest(app).get('/health');
      expect(response.status).toBe(200);
    });

    it('should return a 200 status code when requesting the apollo health route', async () => {
      const app = createApp();
      const response = await supertest(app).get(
        '/.well-known/apollo/server-health',
      );
      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual({
        status: 'pass',
      });
    });

    it('should return a 404 status code when requesting an invalid route', async () => {
      const app = createApp();
      const response = await supertest(app).get('/invalid-route');
      expect(response.status).toBe(404);
    });
  });
});
