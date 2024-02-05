class Cart {
  constructor(orderItems, shippingFee) {
    this.orderItems = orderItems;
    this.shippingFee = shippingFee;
  }

  get total() {
    let result = 0;
    for (const orderItem of this.orderItems) {
      result += orderItem.price * orderItem.count;
    }
    return result;
  }

  get totalString() {
    return this.total.toLocaleString("en-US");
  }

  totalWithShippingFee() {
    let result = 0;
    for (const orderItem of this.orderItems) {
      result += orderItem.price * orderItem.count;
    }
    return result + this.shippingFee;
  }
}

class OrderItem {
  constructor(productId, price, count) {
    this.productId == productId;
    this.price = price;
    this.count = count;
  }
}

const cartStorageKey = "cart";

function loadYourCart() {
  var yourCart = getMyCartFromStorage();
  const products = loadProductsFromStorage();
  $("#orderItemList").text("");
  $("#cartCountItem").text(yourCart.orderItems.length);
  for (const orderItem of yourCart.orderItems) {
    const currentProduct = products[orderItem.productId];
    if (!currentProduct) continue;
    let text = `
        <div class="list-group-item container-fluid">
            <div class="d-flex justify-content-around">
            <img
            
                src="../../assets/images/products/${currentProduct.image}"
                class="bg-secondary-subtle p-4"
                width="120"
            />
            <div class="d-flex flex-column ps-3 justify-content-between">
                <h5>${currentProduct.name}</h5>
                <div class="d-flex align-items-end">
                <div class="form-floating me-5">
                    <input
                    type="number"
                    value="${orderItem.count}"
                    class="form-control"
                    id="countInput"
                    />
                    <label for="countInput">Count</label>
                </div>
                <p class="w-100">₫ ${orderItem.price.toLocaleString(
                  "en-US"
                )}</p>
                </div>
            </div>
            </div>
        </div>
        `;
    $("#orderItemList").append(text);
  }
}

function calcTotal(yourCart) {
  let result = 0;
  if (!yourCart) return result;
  var cart = new Cart(yourCart.orderItems, yourCart.shippingFee);
  return cart.totalwithShippingFee();
  // for (const orderItem of yourCart.orderItems) {
  //   result += orderItem.count * orderItem.price;
  // }
  // return result;
}

function getMyCartFromStorage() {
  var jsonString = localStorage.getItem("cart");
  if (!jsonString) return new Cart([], 0);
  var yourCart = new Cart(
    JSON.parse(jsonString).orderItems,
    JSON.parse(jsonString).shippingFee || 0
  );
  return yourCart;
}

function saveMyCartToStorage(myCart) {
  localStorage.setItem(cartStorageKey, JSON.stringify(myCart));
}

function removeMyCartFromStorage() {
  localStorage.removeItem(cartStorageKey);
}
