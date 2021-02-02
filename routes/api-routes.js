// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const moment = require("moment");
const TODAY = moment().utc();

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // VIEW MY APPOINTMENTS
  //GET make route so user can see appointments they have made based on their id
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      return res.json({});
    }

    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    db.User.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Appointment],
      attributes: {
        exclude: ["password"]
      }
    }).then((user) => {
      res.json(user);
    });
  });

  // VIEW AVAILABLE
  //GET make route for when a user wants to book an appointment. This route will get all appointments and remove those from the variable times on a calender
  app.get("/api/available_appointments", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      return res.json({});
    }

    db.Appointment.findAll({
      where: {
        UserId: null
      }
    }).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });

  // MAKE APPOINTMENT
  // PUT route that'll takes user appointment data. Store with userID
  app.put("/api/appointments/:appointmentId", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      return res.json({});
    }

    db.Appointment.update({UserId: req.user.id}, {
      where: {
        id: req.params.appointmentId
      }
    }).then(function(dbAppointment) {
      res.json(dbAppointment);
    });
  });
};
