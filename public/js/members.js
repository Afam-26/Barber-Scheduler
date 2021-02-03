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


  $(".appointments-button").click(function() {
    $.get(`/api/appointments/user/${userID}`).then(data => {
    
      for(var i = 0; i < data.length; i++){
        $(".view-appointments").append('<li>' + data[i].appointmentDate + '</li>');
      }
      
      });
  });

  // PUT Make new appointment by user (send appoointID to backend and backend assign appointment timeslot for user)
  const appointmentId = 4; // TODO, you have to get the AppointmentID. This will be one of the available appointments.

  // $.ajax({ url: `/api/appointments/${appointmentId}`, type: "PUT" }).then(data => {
  //     console.log("view all available appointments");
  //     console.log(data);
  //   });
});
