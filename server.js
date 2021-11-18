const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome! Hello World!" });
});

require("./routes/products.routes")(app);

const PORT = process.env.PORT || 3002;
module.exports = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
