$(document).ready(() => {
  let userID;
 
 
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {

    // The following will print out all the user appointments
    userID = data.id;

    $(".member-name").text(data.firstName);

  });

  // GET Make request for all appointments to display available appointments
  $.get("/api/available_appointments").then(data => {
    console.log("view all available appointments");
    console.log(data);
  });

  $(".logout").click(function() {      

    $.get("/logout", (req, res) => {
    
      window.location.href = "/";
      
    });

    
  });

  $(".appointments-button").click(function() {
    $.get(`/api/appointments/user/${userID}`).then(data => {
    
      for(var i = 0; i < data.length; i++){
        $(".view-appointments").append('<li>' + data[i].appointmentDate + '</li>');
        console.log(data[i].appointmentDate)
      }
      
      });
  });



    $("#Nine").click(function() {
      var time = document.getElementById("Nine").textContent
      var userNumber = userID;

      $("#Nine").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Ten").click(function() {
      var time = document.getElementById("Ten").textContent
      var userNumber = userID;

      $("#Ten").css('display', 'none');


      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Eleven").click(function() {
      var time = document.getElementById("Eleven").textContent
      var userNumber = userID;
      
      $("#Eleven").css('display', 'none');
    

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Twelve").click(function() {
      var time = document.getElementById("Twelve").textContent
      var userNumber = userID;
     
      $("#Twelve").css('display', 'none');
     

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#One").click(function() {
      var time = document.getElementById("One").textContent
      var userNumber = userID;
      
      $("#One").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Two").click(function() {
      var time = document.getElementById("Two").textContent
      var userNumber = userID;
      
      $("#Two").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Three").click(function() {
      var time = document.getElementById("Three").textContent
      var userNumber = userID;
      
      $("#Three").css('display', 'none');
      
      
      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Four").click(function() {
      var time = document.getElementById("Four").textContent
      var userNumber = userID;
      
      $("#Four").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });

    $("#Five").click(function() {
      var time = document.getElementById("Five").textContent
      var userNumber = userID;
      
      $("#Five").css('display', 'none');
      

      $.post("/api/appointments/add", {
        appointmentDate: time,
        UserID: userNumber
      })
        .then(() => {
          console.log("Works");
        })

    });
});


