module.exports = function(sequelize, DataTypes) {
  const Appointment = sequelize.define("Appointment", {
    appointmentDate: {
      type: DataTypes.DATE,
    },
  });

  Appointment.associate = function (models) {
    models.Appointment.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true // Allowing UserId to be null. This means no appointment is assigned to a user yet.
      }
    })
  }

  return Appointment;
};
