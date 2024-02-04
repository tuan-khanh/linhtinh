function loadProducts() {
  let i = 0;
  for (const product of products) {
    const text = `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-5">
        <div class="card box-shadow3" style="height: max-content">
          <img
            src="./assets/images/products/${product.image}"
            alt="${product.name}"
            class="card-image-top bg-secondary-subtle p-4"
          />
          <div class="card-body" style="height: 16rem;">
            <h5 class="card-title line-clamp">${product.line}</h5>
            <h5 class="card-title line-clamp" style="font-weight: 300;">${product.name}</h5>
            <p class="card-text product_desc line-clamp" style="font-size: 14px;">
              ${product.description}
            </p>
            <p class="card-text line-clamp">
              ₫ ${product.priceString}
            </p>
            <button class="btn btn-primary" onclick="addToCart(${i})">Add to cart</button>
          </div>
        </div>
      </div>
        `;
    $("#productList").append(text);
    i++;
  }
}

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
