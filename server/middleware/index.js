const bodyParser = require('body-parser');
const formData = require("express-form-data");
const cors = require('cors');
const config = require('../config');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors(config.corsOptions));
    app.use(formData.parse(config.multipartyOptions));
};
