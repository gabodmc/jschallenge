'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [

      { id:1,
        revenue: 1,
        concept: 'Alimento',
        amount: 500,
        date: '2021-09-30'
      },
      { id:2,
        revenue: 1,
        concept: 'Transporte',
        amount: 1500,
        date: '2021-09-30'
      },
      { id:3,
        revenue: 2,
        concept: 'Varios',
        amount: 300,
        date: '2021-09-30'
      },
      { id:4,
        revenue: 2,
        concept: 'Viaticos',
        amount: 200,
        date: '2021-09-30'
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
