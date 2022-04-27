const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator; // calculator 가 들어갈 변수. 매 테스트마다 before로 인해 새로운 객체가 할당된다.

  // 각각의 테스트는 독립적이여야 하기때문에, Calculator 객체를 매 태스트 이전에 새로 생성해주자
  beforeEach(() => {
    calculator = new Calculator();
  });

  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('sets', () => {
    calculator.set(9);
    expect(calculator.value).toBe(9);
  });

  it('clears to 0', () => {
    calculator.set(9);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  // 나누는 것은 여러개의 테스트를 포함하기 때문에 그룹으로 묶어준다
  describe('adds', () => {
    it('adds', () => {
      calculator.set(1);
      calculator.add(2);
      expect(calculator.value).toBe(3);
    });

    // 에러테스트
    it('add should throw error if value is greater than 100', () => {
      // 에러 테스트 하는 방법!
      expect(() => {
        calculator.add(101);
      }).toThrow('Value can not be greater than 100');
    });
  });

  it('subtracts', () => {
    calculator.subtract(1);
    expect(calculator.value).toBe(-1);
  });

  it('multiplies', () => {
    calculator.set(5);
    calculator.multiply(4);
    expect(calculator.value).toBe(20);
  });

  // 나누는 것은 여러개의 테스트를 포함하기 때문에 그룹으로 묶어준다
  describe('divides', () => {
    it('0/0', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });

    it('1/0', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });

    it('4/4', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  });
});
