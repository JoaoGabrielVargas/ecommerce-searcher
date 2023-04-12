const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Search = require('../models/Search');

const connection = new Sequelize(configDB);

Search.init(connection);

module.exports = connection;