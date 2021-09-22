'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      incomeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'incomes',
          key: 'id'
        }
      },
      conceptId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'concepts',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};