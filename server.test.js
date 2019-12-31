const server = require('./server');
const request = require('supertest');
const db = require('./data/db-config');
const Departments = require('./models/dept-models');

describe('server', () => {
    beforeEach(async () => {
        await db('departments').truncate();
    });

    describe('GET /departments', () => {
        it('returns 200 status code', async () => {
            const response = await request(server).get('/departments');
            expect(response.status).toBe(200);
        });
    });

    describe('GET /departments', () => {
        it('returns an array of departments', async () => {
            const response = await request(server).get('/departments');
            // expect().toBe();
        });
    });

    describe('POST /departments', () => {
        it('inserts a new department', () => {
            const body = { name: "Mathematics", building: "Test" };

            return request(server).post('/departments').send(body).then(res => {
                expect(res.status).toBe(201);
            });
        });
    });

    describe('DELETE /departments/:id', () => {
        it('returns a 200 status code upon deletion', async () => {
            const body = { name: "test", building: "test" };
            await Departments.add(body);
            
            return request(server).delete('/departments/1').then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});
