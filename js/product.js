function loadProducts() {
  for (const product of products) {
    const text = `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-5">
        <div class="card box-shadow3">
          <img
            src="./assets/images/products/${product.image}"
            alt="${product.name}"
            class="card-image-top bg-secondary-subtle p-4"
          />
          <div class="card-body">
            <h5 class="card-title line-clamp">${product.name}</h5>
            <p class="card-text product_desc line-clamp">
              ${product.description}
            </p>
            <a href="#" class="btn btn-primary">See more...</a>
          </div>
        </div>
      </div>
        `;
    $("#productList").append(text);
  }
}