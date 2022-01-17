module.exports = app => {
  const products = require('../controllers/product.controller.js')

  const router = require('express').Router()

  /**
   * @swagger
   * /products:
   *  get:
   *    description: Use to request all products
   *    responses:
   *      '201':
   *        description: A successful response
   */

  router.get('/', products.findAll)

  /**
   * @swagger
   * /products/{id}:
   *  get:
   *    description: Use to request one product
   *    consumes:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        description: Product ID
   *        required: true
   *        schema:
   *          type: integer
   *          format: int64
   *    responses:
   *      '201':
   *        description: A successful response
   */

  router.get('/:id', products.findOne)

  /**
   * @swagger
   * /products:
   *  post:
   *    description: Use to create a product
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: body
   *        name: product
   *        description: The product to create.
   *        schema:
   *          type: object
   *          properties:
   *            title:
   *              type: string
   *            description:
   *              type: string
   *    responses:
   *      '201':
   *        description: A successful response
   */

  router.post('/', products.create)

  /**
   * @swagger
   * /products/{id}:
   *  put:
   *    description: Use to update a product
   *    consumes:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        description: Product ID
   *        required: true
   *        schema:
   *          type: integer
   *          format: int64
   *      - in: body
   *        name: product
   *        description: The product to create.
   *        schema:
   *          type: object
   *          properties:
   *            title:
   *              type: string
   *            description:
   *              type: string
   *    responses:
   *      '201':
   *        description: A successful response
   */

  router.put('/:id', products.update)

  /**
   * @swagger
   * /products/{id}:
   *  put:
   *    description: Use to update a product
   *    consumes:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        description: Product ID
   *        required: true
   *        schema:
   *          type: integer
   *          format: int64
   *      - in: body
   *        name: product
   *        description: The product to create.
   *        schema:
   *          type: object
   *          properties:
   *            title:
   *              type: string
   *            description:
   *              type: string
   *    responses:
   *      '201':
   *        description: A successful response
   */

  router.delete('/:id', products.delete)

  app.use('/products', router)
}
