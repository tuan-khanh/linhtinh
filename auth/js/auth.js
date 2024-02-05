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
