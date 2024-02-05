const productKeyStorage = "products";
function loadProductsFromStorage() {
  var jsonString = localStorage.getItem(productKeyStorage);
  if (!jsonString) return [];
  return JSON.parse(jsonString);
}

function removeProductFromStorage(id) {
  let products = loadProductsFromStorage();
  products = products.filter((e) => e.id != id);
  localStorage.setItem(productKeyStorage, JSON.stringify(products));
}

function addProductToStorage(product) {
  let products = loadProductsFromStorage();
  products.push(product);
  localStorage.setItem(productKeyStorage, JSON.stringify(products));
}
