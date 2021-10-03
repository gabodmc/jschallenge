const express = require('express');
const router = express.Router();
const apiTransactionController = require('../../controllers/api/apiTransactionController');
const { validateTransaction } = require('../../middlewares/validations.js');

//Api Routes
router.get('/', apiTransactionController.list);
router.get('/search', apiTransactionController.search);
router.get('/:id', apiTransactionController.show);
router.post('/', validateTransaction , apiTransactionController.create);
router.put('/:id', apiTransactionController.update);
router.delete('/:id', apiTransactionController.delete);

module.exports= router;
