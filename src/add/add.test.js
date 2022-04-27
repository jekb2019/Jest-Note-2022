const add = require('./add.js');

test('Adding works', () => {
  expect(add(1, 2)).toBe(3);
});
