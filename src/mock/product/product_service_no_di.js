/**
 * 나쁜 코드이다! 이건 이렇게 하면 안되는걸 배우기 위해 있는 코드이다.
 */

const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  // 우리가 테스트 할 코드. 우리는 Client를 테스트하는게 아니라 Service안에 있는 fetchAvailableItems함수를 테스트 하고싶은것이다.
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
