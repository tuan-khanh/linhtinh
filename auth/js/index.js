let accountList = [
  {
    username: "admin",
    password: "admin",
  },
];

const usernameKeyStorage = "user";

$("document").ready(function () {
  $("#loginButton").on("click", function () {
    let username = $("#usernameInput").val();
    let password = $("#passwordInput").val();
    console.debug({ username, password });
    if (!username) {
      if (!$("#usernameInput").hasClass("is-invalid")) {
        $("#usernameInput").addClass("is-invalid");
      }
      $("#usernameInput")
        .parent()
        .children(".invalid-feedback")
        .text("Please enter your username");
      return;
    }
    $("#usernameInput").removeClass("is-invalid");
    if (!password) {
      if (!$("#passwordInput").hasClass("is-invalid")) {
        $("#passwordInput").addClass("is-invalid");
      }
      $("#passwordInput")
        .parent()
        .children(".invalid-feedback")
        .text("Please enter your password");
      return;
    }
    $("#passwordInput").removeClass("is-invalid");
    let exist = accountList.find(
      (e) => e.username == username || e.password == password
    );
    if (!exist) {
      $("form > .invalid-feedback").text("Username or password is incorrect.");
      if (!$("form > .invalid-feedback").hasClass("d-block")) {
        $("form > .invalid-feedback").addClass("d-block");
      }
    } else {
      localStorage.setItem(usernameKeyStorage, username);
      window.location.href = "/";
    }
  });

  $("#registerAccountButton").on("click", function () {
    let username = $("#usernameInput").val();
    let password = $("#passwordInput").val();
    let confirmPassword = $("#confirmPasswordInput").val();
    console.debug({ username, password });
    if (!username) {
      if (!$("#usernameInput").hasClass("is-invalid")) {
        $("#usernameInput").addClass("is-invalid");
      }
      $("#usernameInput")
        .parent()
        .children(".invalid-feedback")
        .text("Please enter your username");
      return;
    }
    $("#usernameInput").removeClass("is-invalid");
    if (!password) {
      if (!$("#passwordInput").hasClass("is-invalid")) {
        $("#passwordInput").addClass("is-invalid");
      }
      $("#passwordInput")
        .parent()
        .children(".invalid-feedback")
        .text("Please enter your password");
      return;
    }
    $("#passwordInput").removeClass("is-invalid");

    if (!confirmPassword) {
      if (!$("#confirmPasswordInput").hasClass("is-invalid")) {
        $("#confirmPasswordInput").addClass("is-invalid");
      }
      $("#confirmPasswordInput")
        .parent()
        .children(".invalid-feedback")
        .text("Please re-enter your password");
      return;
    }
    if (confirmPassword != password) {
      if (!$("#confirmPasswordInput").hasClass("is-invalid")) {
        $("#confirmPasswordInput").addClass("is-invalid");
      }
      $("#confirmPasswordInput")
        .parent()
        .children(".invalid-feedback")
        .text("Not match");
      return;
    }
    $("#confirmPasswordInput").removeClass("is-invalid");

    let exist = accountList.find((e) => e.username == username);
    if (exist) {
      $("form > .invalid-feedback").text(`The user ${username} already exist`);
      if (!$("form > .invalid-feedback").hasClass("d-block")) {
        $("form > .invalid-feedback").addClass("d-block");
      }
    } else {
      accountList = [...accountList, { username, password }];
      window.location.href = "./login.html";
    }
  });
});
