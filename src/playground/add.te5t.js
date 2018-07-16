const add = (a, b) => a + b;

const generateGreeting = (name = 'Anon') => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return name in the greeting', () => {
  const result = generateGreeting('Bill');
  expect(result).toBe(`Hello Bill!`);
})

test('should return "anon" if there is no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anon!');
})

// manual assertion
  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
  // }