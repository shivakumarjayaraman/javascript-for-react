// ============================================================
// Session 1: JS Syntax & Data Structures
// Run with: node index.js
// ============================================================

// ── 1. var / let / const ─────────────────────────────────────

const PI = 3.14159
let counter = 0

counter = 1        // OK — let can be reassigned
// PI = 3          // TypeError — const cannot be reassigned

console.log('--- 1. var/let/const ---')
console.log('PI:', PI)
console.log('counter:', counter)

// Block scope demo
if (true) {
  let blockScoped = 'inside block'
  console.log('Inside block:', blockScoped)
}
// console.log(blockScoped) // ReferenceError

// ── 2. Template Literals ─────────────────────────────────────

const name = 'Alice'
const age = 25

const oldWay = 'Hello, ' + name + '! You are ' + age + ' years old.'
const modern = `Hello, ${name}! You are ${age} years old.`

// Expressions work inside ${}
const birthYear = `Born around: ${2024 - age}`

// Multi-line
const multiLine = `
  Name: ${name}
  Age:  ${age}
  URL:  http://localhost:8080/api/users/${1}
`

console.log('\n--- 2. Template Literals ---')
console.log(oldWay)
console.log(modern)
console.log(birthYear)
console.log(multiLine)

// ── 3. Objects ───────────────────────────────────────────────

const product = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
  inStock: true,
}

console.log('\n--- 3. Objects ---')
console.log('Dot notation:', product.name)
console.log('Bracket notation:', product['price'])

// Add a property dynamically
product.category = 'Electronics'
console.log('After adding category:', product)

// Shorthand property names — key and variable have the same name
const username = 'bob'
const email = 'bob@example.com'
const user = { username, email }  // same as { username: username, email: email }
console.log('Shorthand user:', user)

// ── 4. Arrays ────────────────────────────────────────────────

const fruits = ['apple', 'banana', 'cherry']

console.log('\n--- 4. Arrays ---')
console.log('First:', fruits[0])
console.log('Length:', fruits.length)

fruits.push('date')
console.log('After push:', fruits)

const removed = fruits.pop()
console.log('Popped:', removed)
console.log('After pop:', fruits)

// ── 5. Object Destructuring ──────────────────────────────────

const { id, name: productName, price } = product

console.log('\n--- 5. Object Destructuring ---')
console.log('id:', id)
console.log('name (renamed to productName):', productName)
console.log('price:', price)

// Nested destructuring
const order = {
  id: 100,
  customer: { name: 'Alice', city: 'New York' },
  total: 250,
}
const {
  customer: { name: customerName, city },
} = order
console.log('Customer:', customerName, 'from', city)

// ── 6. Array Destructuring ───────────────────────────────────

const coords = [40.7128, -74.006]
const [lat, lng] = coords

console.log('\n--- 6. Array Destructuring ---')
console.log(`Lat: ${lat}, Lng: ${lng}`)

// Skip elements
const [first, , third] = [10, 20, 30]
console.log('first:', first, 'third:', third)

// This is exactly how useState works in React:
// const [count, setCount] = useState(0)

// ── 7. Spread — Arrays ───────────────────────────────────────

const a = [1, 2, 3]
const b = [4, 5, 6]

const combined = [...a, ...b]
const withZero = [0, ...a]
const copyOfA = [...a]

console.log('\n--- 7. Spread (Arrays) ---')
console.log('combined:', combined)
console.log('withZero:', withZero)
console.log('copy:', copyOfA)

// Spread is a shallow copy
copyOfA.push(99)
console.log('original unchanged:', a)
console.log('copy has 99:', copyOfA)

// ── 8. Spread — Objects ──────────────────────────────────────

const defaults = { theme: 'light', language: 'en', fontSize: 14 }
const userPrefs = { language: 'fr', fontSize: 16 }
const settings = { ...defaults, ...userPrefs }

console.log('\n--- 8. Spread (Objects) ---')
console.log('merged settings:', settings)

// Update a single field — this is how React state updates work
const updatedProduct = { ...product, price: 799.99 }
console.log('original price:', product.price)        // 999.99 — unchanged
console.log('updated price:', updatedProduct.price)  // 799.99

// ── 9. Rest Parameters ───────────────────────────────────────

function logArgs(first, second, ...rest) {
  console.log('first:', first)
  console.log('second:', second)
  console.log('rest:', rest)
}

console.log('\n--- 9. Rest ---')
logArgs(1, 2, 3, 4, 5)

const [head, ...tail] = [10, 20, 30, 40]
console.log('head:', head, 'tail:', tail)

// ── 10. Optional Chaining ────────────────────────────────────

const userWithAddress = {
  name: 'Alice',
  address: { city: 'New York', zip: '10001' },
}
const userWithout = { name: 'Bob' }

console.log('\n--- 10. Optional Chaining ---')
console.log(userWithAddress?.address?.city)   // 'New York'
console.log(userWithout?.address?.city)       // undefined — no crash!

// Combine with nullish coalescing for defaults
console.log(userWithout?.address?.city ?? 'Unknown')  // 'Unknown'
