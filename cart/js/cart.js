class Cart {
  constructor() {
    this.orderItems = [];
  }

  get total() {
    let result = 0;
    for (const orderItem of this.orderItems) {
      result += orderItem.price * orderItem.count;
    }
  }

  get totalString() {
    return this.total.toLocaleString("en-US");
  }
}

class OrderItem {
  constructor(productId, price, count) {
    this.productId == productId;
    this.price = price;
    this.count = count;
  }
}
