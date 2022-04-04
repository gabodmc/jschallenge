const express = require('express');
const router = express.Router();
const apiUserController = require('../../controllers/api/apiUserController');
const { userLogin } = require('../../middlewares/validations.js');

const { route } = require('./apiTransactionRouter');

//User Routes
router.post('/create', apiUserController.create);
router.get('/login', userLogin, apiUserController.login);

module.exports= router;
