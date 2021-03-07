'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'user',
        schema: 'scrapbook',
      },
      [
        {
          name: 'Rafael',
          email: 'rafael@growdev',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Zeus',
          email: 'zeus@growdev',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vinicios',
          email: 'vinicios@growdev',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Karol',
          email: 'karol@growdev',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      {
        tableName: 'user',
        schema: 'scrapbook',
      },
      null,
      {}
    );
  },
};
