class ProductService {
  constructor(productClient) {
    // 이런식으로 클래스 내부에서 직접적으로 의존을 만들어서 사용하는것은
    // Dependency injection 법칙을 위반한다.
    // Dependency는 외부로부터 받아와야한다.
    this.productClient = productClient;
  }

  // 우리가 테스트 할 코드. 우리는 Client를 테스트하는게 아니라 Service안에 있는 fetchAvailableItems함수를 테스트 하고싶은것이다.
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
