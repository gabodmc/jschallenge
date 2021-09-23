'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [

      { id:1,
        revenue: 'Ingreso',
        concept: 'Alimento',
        amount: 500,
      },
      { id:2,
        revenue: 'Egreso',
        concept: 'Transporte',
        amount: 1500,
      },
      { id:3,
        revenue: 'Ingreso',
        concept: 'Varios',
        amount: 300,
      },
      { id:4,
        revenue: 'Egreso',
        concept: 'Viaticos',
        amount: 200,
      },
    
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Transactions', null, {});

  }
};
