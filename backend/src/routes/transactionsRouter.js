const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const {
  validateTransaction,
  editTransaction,
} = require("../middlewares/validations.js");

//Api Routes
router.get("/", transactionsController.list);
router.get("/search", transactionsController.search);
router.get("/:id", transactionsController.show);
router.post("/", validateTransaction, transactionsController.create);
router.put("/:id", editTransaction, transactionsController.update);
router.delete("/:id", transactionsController.delete);

module.exports = router;
