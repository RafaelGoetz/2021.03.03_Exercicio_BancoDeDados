'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'message',
        schema: 'scrapbook',
      },
      [
        {
          content: 'Bem vindo!',
          user_uid: '1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'Aceito!',
          user_uid: '2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'Bom dia!',
          user_uid: '3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'Boa tarde!',
          user_uid: '4',
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
