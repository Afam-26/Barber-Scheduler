$(document).ready(() => {

  var userID;
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    console.log(data);
    userID = data.id;
    $(".member-name").text(data.email);
  });

  //GET Make request for user appointments (use var userID)

  //GET Make request for all appointments to display available appointments

  //POST Make new appointment (use var userID)
});
