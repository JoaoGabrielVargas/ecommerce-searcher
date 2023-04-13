const { Op } = require('sequelize')
const Search = require('../models/Search')

module.exports = {
  async createSearch(req, res) {
    try {
      const { title, description, thumbnail, price, permalink, id } = req.body;
      console.log(description);
      const query = await Search.create({ title, description, thumbnail, price, permalink, id });
      res.status(200).json(query)

    } catch (error) {
      res.status(400).json({error})
    }
  },
  async getByQuery(req, res) {
    const { query } = req.query; 
    console.log(query);
    try {
      const result = await Search.findAll({
        where: {
          title: {[Op.substring] : query}
        }
      });
      res.status(200).json(result)

    } catch (error) {
      console.log(error)
      res.status(400).json({error})
    }
  }
}