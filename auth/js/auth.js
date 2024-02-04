function isLoggedIn() {
  return localStorage.getItem("user");
}

function logout(url = "") {
  localStorage.removeItem("user");
  if (url) {
    window.location.href = url;
  }
}
