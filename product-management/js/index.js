$(document).ready(function () {
  if (!(isLoggedIn() && checkIfAdmin())) {
    window.location.href = "../";
  }
  loadProductTable();
});

function loadProductTable() {
  var products = loadProductsFromStorage();
  let i = 0;
  $("#productTable tbody").append("");

  for (const product of products) {
    const text = `
    <tr id="product${product.id}">
        <th scope="row" class="row-order">${i + 1}</th>
        <td style="width: 160px">
            <img
                src="../../assets/images/products/${product.image}"
                width="100"
                class="card-image-top bg-secondary-subtle p-1"
            />
        </td>
        <td class="px-1" style="width: 30%">${product.name}</td>
        <td class="px-1 text-end" style="width: 30%">₫ ${product.price.toLocaleString(
          "en-US"
        )}</td>
        <td class="px-1 text-center " style="width: 40%">
            <button class="btn btn-success" onclick="editProduct(${
              product.id
            })">
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="btn btn-danger" onclick="removeRow(${product.id})">
                <i class="bi bi-trash"></i>
            </button>
        </td>
    </tr>
    `;
    $("#productTable tbody").append(text);
    i++;
  }
}

function removeRow(productId) {
  removeProductFromStorage(productId);
  $(`#product${productId}`).hide();
  $(".row-order").text(function (index, _) {
    return index + 1;
  });
}

function addProduct() {
  let productName = $("#productName").val();
  let price = parseInt($("#priceInput").val());
  let image = $("#imageInput").val();
  let description = $("#descriptionInput").val();
  console.log({ productName, price, image });
  if (!$("#addProductForm").hasClass("was-validated")) {
    $("#addProductForm").addClass("was-validated");
  }
  if (!productName) {
    $("#productName")
      .parent()
      .children(".invalid-feedback")
      .text("Must enter the product name");
  }
  if (!price) {
    $("#priceInput")
      .parent()
      .children(".invalid-feedback")
      .text("Must enter the product price");
  }
  if (!image) {
    $("#imageInput")
      .parent()
      .children(".invalid-feedback")
      .text("Must choose an image");
  }
  var product = new Product(
    Math.floor(Math.random),
    "",
    productName,
    price,
    description,
    0,
    image.split("\\").pop()
  );
  addProductToStorage(product);
  $("#productTable tbody").append(`
  <tr id="product${product.id}">
    <th scope="row" class="row-order"></th>
    <td style="width: 160px">
      <img
          src="../../assets/images/products/${product.image}"
          width="100"
          class="card-image-top bg-secondary-subtle p-1"
      />
  </td>
  <td class="px-1" style="width: 30%">${product.name}</td>
  <td class="px-1 text-end" style="width: 30%">₫ ${product.price.toLocaleString(
    "en-US"
  )}</td>
  <td class="px-1 text-center " style="width: 40%">
      <button class="btn btn-danger" onclick="removeRow(${product.id})">
          <i class="bi bi-trash"></i>
      </button>
  </td>
</tr>
    `);
  $(".row-order").text(function (index, _) {
    return index + 1;
  });
  $("#addProductDialog").removeClass("show");
}
