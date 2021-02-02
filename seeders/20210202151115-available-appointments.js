const availableAppointments = require("../data/available-appointments.js");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Appointments", null, {});
    await queryInterface.bulkInsert("Appointments", availableAppointments, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Appointments", null, {});
  }
};
