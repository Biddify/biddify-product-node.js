const app = require('../server');
const request = require('supertest');

describe('Post Endpoints', () => {
    it('Should create a new floor', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                "title": "Test",
                "description": "Test omschrijving"
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('id')
    })
})