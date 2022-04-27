const fetchProduct = require('./async.js');

describe('async', () => {
  /**
   * 이렇게 하면 안된다!!!
   * { item: 'Milk', price: 2000 } 가 나와야함에도 불구하고, 패스가 된다.
   * it은 프로미스가 resolve 되기 전에 끝나버리기 때문이다.
   */
  //   it('async', () => {
  //     fetchProduct().then((item) => {
  //       expect(item).toEqual({ item: 'Poop', price: 2000 }); // 테스트가 패스가 된다고??
  //     });
  //   });

  /**
   * 방법 1 (비추):
   * done이라는 인자(콜백)를 받아와서, 해당 콜백을 테스트가 종료되는 시점에 불러주면 된다.
   * 하지만 done은 테스트 실패시(?) 5초동안 기다리도록 설정되어있기 때문에 테스트가 느려진다.
   *
   * 방법 2 ~ 4를 사용하자.
   */
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 }); // 테스트가 패스가 된다고??
      done();
    });
  });

  /**
   * 방법 2:
   * 프로미스 자체를 return 해주면 된다. 즉각적으로 에러를 확인하기 때문에 위에 done (방법 1) 방법보다 훨신 빠르다.
   */
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 2000 }); // 테스트가 패스가 된다고??
    });
  });

  /**
   * 방법 3:
   * Async Await을 사용
   */
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 2000 }); // 테스트가 패스가 된다고??
  });

  /**
   * 방법 4:
   * resolve 와 reject 사용
   */
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: 'Milk',
      price: 2000,
    });
  });
  it('async - reject', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
