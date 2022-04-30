/**
 * 테스트 용으로만 쓰일 ProductClient의 Stub이다.
 *  - ProductClient와 동일한 interface를 갖고있으면서,
 *    network 통신을 하지 않고 바로 값을 리턴해주는 함수를 갖고있다.
 */

class StubProductClient {
  async fetchItems() {
    return [
      { item: '🥛', available: true },
      { item: '🍌', available: false },
    ];
  }
}

module.exports = StubProductClient;
