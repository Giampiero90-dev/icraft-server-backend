"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Home & Living",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jewelry & Accessories",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Artworks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kids",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
