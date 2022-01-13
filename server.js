const express = require('express')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({ message: 'Welcome! Hello World!' })
})

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Product API',
      description: 'Product API Information',
      contact: {
        name: 'Rob Fontys'
      },
      servers: ["http://localhost:3002"]
    }
  },
  apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

require('./routes/products.routes')(app)

const PORT = process.env.PORT || 3002
module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
