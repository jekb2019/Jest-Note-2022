const Stack = require('./stack.js');

/**
 * TDD는 모든 테스트 케이스를 다 만들고 구현하는게 아니라,
 * 실패하는 테스트 하나 만들고, 그거 구현하고를 반복하는 것이다.
 */

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('Stack is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item', () => {
    stack.push('banana');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('throws error when stack is empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('Returns last item and removes it', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('throws error when stack is empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('peeks last item', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.peek()).toBe('apple');
      expect(stack.size()).toBe(2);
    });
  });
});
