$(document).ready(function () {
  loadYourCart();
  const yourCart = getMyCartFromStorage();
  $("#exampleModal .modal-body").text(
    `You have just pay ₫ ${yourCart
      .totalWithShippingFee()
      .toLocaleString("en-US")} order successfully.`
  );
});

function removeYourCart() {
  removeMyCartFromStorage();
  loadYourCart();
}
