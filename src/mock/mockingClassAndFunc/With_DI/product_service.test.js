/**
 * Stub을 이용하는 좋은 코드
 */
const ProductService = require('./product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  // 예상한 값을 리턴하는 비동기 함수를 모크한것
  const fetchItems = jest.fn(async () => {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('Should filter out only available items', async () => {
    // fetchAvailableItems 내부에서 쓰인 ProductClient의 fetchItems 우리가 모크해준걸 사용하게된다
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: '🥛', available: true }]);
    expect(items.length).toBe(1);
  });
});
