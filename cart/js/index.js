$(document).ready(function () {
  var yourCart = getMyCartFromStorage();
  loadProductTable();
  $("#tempTotal").text(
    "₫ " + yourCart.totalWithShippingFee().toLocaleString("en-US")
  );
  setTotal(yourCart.totalWithShippingFee());
  loadYourCart();
});

function changeMyCart(productId) {
  const count = parseInt($(`#countInput${productId}`).val());
  const index = yourCart.orderItems.findIndex((e) => e.productId == productId);
  if (index != -1) {
    yourCart.orderItems[index].count = count;
  }
  localStorage.setItem("cart", JSON.stringify(yourCart));
  $("#tempTotal").text("₫ " + yourCart.total.toLocaleString("en-US"));
  loadYourCart();
  setTotal(yourCart.totalWithShippingFee());
}

function loadProductTable() {
  yourCart = getMyCartFromStorage();
  $("table#orderItemTable tbody").text("");
  let i = 0;
  for (const orderItem of yourCart.orderItems) {
    const currentProduct = products[orderItem.productId];
    if (!currentProduct) continue;
    let text = `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>
          <img
            src="../../assets/images/products/${currentProduct.image}"
            width="100"
            class="card-image-top bg-secondary-subtle p-1"
          />
        </td>
        <td class="px-1">${currentProduct.name}</td>
        <td>
          <div class="me-3">
            <input
              type="number"
              value="${orderItem.count}"
              class="form-control"
              id="countInput${i}"
              style="max-width: 6rem"
              onchange="changeMyCart(${i})"
            />
          </div>
        </td>
        <td class="px-1 text-end">₫ ${orderItem.price.toLocaleString(
          "en-US"
        )}</td>
      </tr>
    `;
    i++;
    $("#orderItemTable tbody").append(text);
  }
}

function setTotal(total) {
  $("#totalBill").text("₫ " + total.toLocaleString("en-US"));
}
