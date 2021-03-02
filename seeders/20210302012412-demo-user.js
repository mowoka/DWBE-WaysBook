"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "giomowoka@gmail.com",
          password: "mowoka123",
          fullName: "giomowoka",
          role: "ADMIN",
          gender: "Male",
          phone: "083821148288",
          address: "Cimahi",
          avatar: "Avatar.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
