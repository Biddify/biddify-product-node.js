const db = require('../models')
const Product = db.products

exports.create = (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }

  const product = {
    title: req.body.title,
    description: req.body.description
  }

  Product.create(product)
    .then(data => {
      res.status(201).send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Some error occurred while creating the Product.'
        })
    })
}

exports.findAll = (req, res) => {
  Product.findAll()
    .then(data => {
      res.status(201).send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: 'Some error occurred while retrieving products.'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.status(201).send(data)
      } else {
        res.status(404).send({
          message: 'Cannot find Product.'
        })
      }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Error retrieving Product.'
        })
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(201).send({
          message: 'Product was updated successfully.'
        })
      } else {
        res.send({
          message: 'Cannot update Product.'
        })
      }
    })
    .catch(e => {
        res.status(500).send({
            message: 'Error updating Product.'
        })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Product was deleted successfully.'
        })
      } else {
        res.send({
          message: 'Cannot delete Product.'
        })
      }
    })
    .catch(e => {
      res.status(500).send({
          message: 'Could not delete Product.'
      })
    })

}
