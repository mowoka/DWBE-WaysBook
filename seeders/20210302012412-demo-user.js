"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "giomowoka@gmail.com",
        password: "mowoka123",
        fullName: "giomowoka",
        role: "ADMIN",
        gender: "Male",
        phone: "0838214428288",
        address: "Cimahi",
        avatar: "avatar.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
