$(document).ready(function () {
  if (isLoggedIn()) {
    $(".auth-nav-item").hide();
    $(".main-nav-item").show();
    $("#currentUser").text(getUserFromStorage());
  } else {
    $(".auth-nav-item").show();
    $(".main-nav-item").hide();
  }

  $("#logOutButton").on("click", function (event) {
    logout("../auth/login.html");
  });


});
