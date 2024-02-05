const userKeyStorage = "user";

function isLoggedIn() {
  return localStorage.getItem("user");
}

function logout(url = "") {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  if (url) {
    window.location.href = url;
  }
}

function checkIfAdmin() {
  return getUserFromStorage() == "admin";
}

function getUserFromStorage() {
  return localStorage.getItem(userKeyStorage);
}
