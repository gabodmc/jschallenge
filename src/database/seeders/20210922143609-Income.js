'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Incomes', [
      {
        id: 1,
        name: 'Ingreso',      
      },
      {
        id: 2,
        name: 'Egreso',      
      }
      
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Incomes', null, {});

  }
};
