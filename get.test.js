const request = require('supertest');
const app = require('./app/index');
const swagger = require('./docs/swagger.json');

describe('GET /documentation.json', () => {
  it('should response with 200 as status code', async () => request(app)
    .get('/documentation.json')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));
});
