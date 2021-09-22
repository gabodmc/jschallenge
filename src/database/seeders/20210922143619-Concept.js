'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Concepts', [
      {
        id: 1,
        name: 'Alimento',      
      },
      {
        id: 2,
        name: 'Viaticos',      
      },
      {
        id: 3,
        name: 'Libreria',      
      }, 
      {
        id: 4,
        name: 'Varios',      
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Concepts', null, {});

  }
};
