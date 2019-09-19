const server = require('./server');
const request = require('supertest');

describe('server', () => {
    it('returns 200 status code', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
    });
});
