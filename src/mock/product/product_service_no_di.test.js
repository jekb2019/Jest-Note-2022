/**
 * 이 코드의 문제점. Mock을 남용한다.
 * Stub을 이용하는게 더 좋다.
 *
 */
const ProductService = require('./product_service_no_di.js');
const ProductClient = require('./product_client.js');

jest.mock('./product_client.js'); // Product client 를 모크해준다.

describe('ProductService', () => {
  // 예상한 값을 리턴하는 비동기 함수를 모크한것
  const fetchItems = jest.fn(async () => {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  });

  // 만들어준 fetchItem mock함수를 ProductClient와 연결해준다.
  // 이렇게 해주면 사용될 ProductClient의 fetchItems는 우리가 모킹해준 함수를 사용하기때문에
  // network dependency나 실제 ProductClient와의 dependency를 없앨 수 있다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    // 만약 ProductClient를 모크해주지 않으면 ProductSerive내부에서 갖고 있는 ProductClient도
    // 함께 테스트 해버리는게 된다! unit test가 아니게 된다.
    // 또한 ProductClient에 있는 네트워크 로직에 의존하게된다.
    // Product Client 자체는 Mock 해야한다.

    productService = new ProductService();
    // fetchItems.mockClear(); // 만약 jest.config.js 에서 clearMocks: false로 되어있다면 해줘야한다.
    // ProductClient.mockClear(); // 만약 jest.config.js 에서 clearMocks: false로 되어있다면 해줘야한다.
  });

  it('Should filter out only available items', async () => {
    // fetchAvailableItems 내부에서 쓰인 ProductClient의 fetchItems 우리가 모크해준걸 사용하게된다
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: '🥛', available: true }]);
    expect(items.length).toBe(1);
  });

  it('Should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
