function loadYourCart() {
  var jsonString = localStorage.getItem("cart");
  if (!jsonString) return;
  var yourCart = JSON.parse(jsonString);
  $("#orderItemList").text("");
  $("#cartCountItem").text(yourCart.orderItems.length);
  for (const orderItem of yourCart.orderItems) {
    const currentProduct = products[orderItem.productId];
    if (!currentProduct) continue;
    let text = `
        <div class="list-group-item container-fluid">
            <div class="d-flex justify-content-around">
            <img
                src="./assets/images/products/${currentProduct.image}"
                class="bg-secondary-subtle p-4"
                width="120"
            />
            <div class="d-flex flex-column ps-3 justify-content-between">
                <h5>${currentProduct.name}</h5>
                <div class="d-flex align-items-end">
                <div class="form-floating me-3">
                    <input
                    type="number"
                    value="${orderItem.count}"
                    class="form-control"
                    id="countInput"
                    />
                    <label for="countInput">Count</label>
                </div>
                <p class="ml-3">${orderItem.price.toLocaleString("en-US")}</p>
                </div>
            </div>
            </div>
        </div>
        `;
    $("#orderItemList").append(text);
  }
}
