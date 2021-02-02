const sequelize = require("sequelize");
const moment = require("moment");

const TODAY = moment().utc();
const STARTING_HOUR = 9; // Default starting appointment time to 9AM

module.exports = [
  {
    appointmentDate: TODAY.hour(STARTING_HOUR).minute(0).toDate(), // 9AM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+1).minute(0).toDate(), // 10AM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+2).minute(0).toDate(), // 11AM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+3).minute(0).toDate(), // 12AM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+4).minute(0).toDate(), // 1PM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+5).minute(0).toDate(), // 2PM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+6).minute(0).toDate(), // 3PM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+7).minute(0).toDate(), // 4PM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  },
  {
    appointmentDate: TODAY.hour(STARTING_HOUR+8).minute(0).toDate(), // 5PM
    createdAt: sequelize.literal("CURRENT_TIMESTAMP"),
    updatedAt: sequelize.literal("CURRENT_TIMESTAMP")
  }
];
