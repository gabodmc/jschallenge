const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { userLogin } = require("../middlewares/validations.js");

//User Routes
router.post("/create", userController.create);
router.get("/login", userLogin, userController.login);

module.exports = router;
