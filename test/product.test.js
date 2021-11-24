const app = require('../server');
const request = require('supertest');

describe('US-04 | Als verkoper, wil ik een product kunnen aanbieden, zodat ik deze kan verkopen', () => {
    it('Correct body POST request', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                "title": "Test",
                "description": "Test omschrijving"
            })
        expect(res.statusCode).toEqual(201)

        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('title')
        expect(res.body).toHaveProperty('description')
        expect(res.body).toHaveProperty('updatedAt')
        expect(res.body).toHaveProperty('createdAt')
    })

    it('Incorrect body (without title) POST request', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                "description": "Test omschrijving"
            })
        expect(res.statusCode).toEqual(400)
    })

    it('Incorrect body (without description) POST request', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                "title": "Test",
            })
        expect(res.statusCode).toEqual(400)
    })

    it('Incorrect empty body POST request', async () => {
        const res = await request(app)
            .post('/api/products')
        expect(res.statusCode).toEqual(400)
    })

    it('Incorrect URL POST request', async () => {
        const res = await request(app)
            .post('/api/product')
            .send({
                "title": "Test",
                "description": "Test omschrijving"
            })
        expect(res.statusCode).toEqual(404)
    })
})

afterAll(done => {
    app.close();
    done();
});