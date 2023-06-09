const { Router } = require('express');
const Search = require('./models/Search');

const SearchController = require('./controller/SearchController')

const router = Router();

router.post('/store', SearchController.createSearch );
router.get('/', SearchController.getByQuery);

module.exports = router; 