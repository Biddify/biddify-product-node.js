module.exports = app => {
  const products = require('../controllers/product.controller.js')

  const router = require('express').Router()

  router.post('/', products.create)

  /**
   * @swagger
   * /products:
   *  get:
   *    description: Use to request all products
   *    responses:
   *      '200':
   *        description: A successful response
   */

  router.get('/', products.findAll)

  router.get('/:id', products.findOne)

  router.put('/:id', products.update)

  router.delete('/:id', products.delete)

  app.use('/products', router)
}
