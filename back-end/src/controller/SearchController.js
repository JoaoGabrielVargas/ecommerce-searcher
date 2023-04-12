const Search = require('../models/Search')

module.exports = {
  async createSearch(req, res) {
    try {
      const { search } = req.body;
      const query = await Search.create({ search });

      res.status(200).json(query)

    } catch (error) {
      res.status(400).json({error})
    }
  },
  async getAll(_req, res) {
    try {
      const query = await Search.findAll();

      res.status(200).json(query)

    } catch (error) {
      res.status(400).json({error})
    }
  }
}