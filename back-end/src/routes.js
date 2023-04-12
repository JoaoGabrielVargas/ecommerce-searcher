const { Router } = require('express');
const Search = require('./models/Search');

const SearchController = require('./controller/SearchController')

const router = Router();

router.post('/', SearchController.createSearch );
router.get('/', SearchController.getAll);

module.exports = router; 