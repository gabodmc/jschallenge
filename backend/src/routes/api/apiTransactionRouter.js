const express = require('express');
const router = express.Router();
const apiTransactionController = require('../../controllers/api/apiTransactionController');

//Api Routes
router.get('/', apiTransactionController.list);
router.get('/search', apiTransactionController.search);
router.get('/:id', apiTransactionController.show);
router.post('/', apiTransactionController.create);
router.put('/:id', apiTransactionController.update);
router.delete('/:id', apiTransactionController.delete);

module.exports= router;
