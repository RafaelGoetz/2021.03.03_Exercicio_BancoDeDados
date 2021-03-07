'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('scrapbook');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('scrapbook');
  }
};
