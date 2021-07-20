const sum = (a, b) => a + b;
const div = (a, b) => a / b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
test('divide two values', () => {
  expect(div(15, 3)).toEqual(5);
});
