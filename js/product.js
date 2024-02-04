const addToCart = function (id) {
  var jsonString = localStorage.getItem("cart");
  if (!jsonString) {
    var yourCart = {
      orderItems: [
        {
          productId: id,
          price: products[id].price,
          count: 1,
        },
      ],
    };
  } else {
    var yourCart = JSON.parse(jsonString);
    let index = yourCart.orderItems.findIndex((e) => e.productId == id);
    if (index != -1) {
      yourCart.orderItems[index].count++;
    } else {
      yourCart.orderItems.push({
        productId: id,
        price: products[id].price,
        count: 1,
      });
    }
  }
  localStorage.setItem("cart", JSON.stringify(yourCart));
  loadYourCart();
};
