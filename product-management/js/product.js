const productKeyStorage = "products";
function loadProducts() {
  var jsonString = localStorage.getItem(productKeyStorage);
  if (!jsonString) return [];
  return JSON.parse(jsonString);
}

function removeProductFromStorage(id) {
  let products = loadProducts();
  products = products.filter((e) => e.id != id);
  localStorage.setItem(productKeyStorage, JSON.stringify(products));
}
