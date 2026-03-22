// math.js — named exports
// A module can export multiple things by name

export function add(a, b) {
  return a + b
}

export function subtract(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero')
  return a / b
}

// You can also export a constant
export const PI = 3.14159265358979

// You can export at the bottom too (same result)
// export { add, subtract, multiply, divide, PI }
