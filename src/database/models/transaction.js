'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Transaction.belongsTo(models.Concept, {as: 'concept'});
    Transaction.belongsTo(models.Income, {as: 'income'})
    }
  };
  Transaction.init({
    incomeId: DataTypes.INTEGER,
    conceptId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};