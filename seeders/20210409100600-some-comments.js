"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          author: "Giovanni Buono",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Marco de Stasio",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Andrea Iorio",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Antonio grande",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Paolo mancuso",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Adam Sandy",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "John Prime",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Luke Short",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Jessica Monroe",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Carolina Del Piero",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Maria Giovane",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Luisa Navona",
          commentText:
            "Great creation! I am definetly going to try myself. Thanks for the inspiration.",
          creationId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
