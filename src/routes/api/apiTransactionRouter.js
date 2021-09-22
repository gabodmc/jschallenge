const express = require('express');
const router = express.Router();
const apiTransactionController = require('../../controller/api/apiTransactionController');

//Api Routes
router.get('/', apiTransactionController.list);
router.get('/:id', apiTransactionController.show);
router.get('/search', apiTransactionController.search);
router.post('/', apiTransactionController.create);
router.delete('/:id', apiTransactionController.delete);

module.exports= router;
