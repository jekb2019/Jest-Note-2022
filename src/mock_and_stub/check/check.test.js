const check = require('./check.js');

describe('check', () => {
  let onSuccess; // Mock 으로 사용할 함수
  let onFail; // Mock 으로 사용할 함수

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it('should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(1); // mock으로 만들어준 onSuccess 함수가 한번 호출되어야 한다
    // expect(onSuccess.mock.calls.length).toBe(1); // 위와 같은 의미

    expect(onSuccess).toHaveBeenCalledWith('yes'); // onSuccess의 인자로 'yes'가 들어있어야 한다.
    // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // 위와 같은 의미

    expect(onFail).toHaveBeenCalledTimes(0); // onFail은 불리면 안된다
  });

  it('should call onFail when predicate is false', () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1); // mock으로 만들어준 onFail 함수가 한번 호출되어야 한다
    expect(onFail).toHaveBeenCalledWith('no'); // onFail 인자로 'no'가 들어있어야 한다.
    expect(onSuccess).toHaveBeenCalledTimes(0); // onSuccess 불리면 안된다
  });
});
