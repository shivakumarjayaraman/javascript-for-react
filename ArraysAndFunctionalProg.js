// ============================================================
// Session 3: Array Methods
// Run with: node index.js
// ============================================================

// Sample dataset — matches the Spring backend's Product shape
const products = [
  { id: 1, name: 'Laptop',    price: 999.99,  stockQuantity: 5,  category: 'tech'   },
  { id: 2, name: 'Mouse',     price: 29.99,   stockQuantity: 0,  category: 'tech'   },
  { id: 3, name: 'Desk',      price: 299.99,  stockQuantity: 3,  category: 'office' },
  { id: 4, name: 'Chair',     price: 199.99,  stockQuantity: 8,  category: 'office' },
  { id: 5, name: 'Monitor',   price: 399.99,  stockQuantity: 2,  category: 'tech'   },
  { id: 6, name: 'Keyboard',  price: 79.99,   stockQuantity: 0,  category: 'tech'   },
]

// ── 1. .map() ─────────────────────────────────────────────────

console.log('--- 1. .map() ---')

// Extract a single field
const names = products.map(p => p.name)
console.log('names:', names)

// Transform to a new shape
const priceTags = products.map(p => ({
  id: p.id,
  label: `${p.name}: $${p.price.toFixed(2)}`
}))
console.log('price tags:', priceTags)

// In React, .map() turns data into JSX — preview:
// products.map(p => <ProductCard key={p.id} product={p} />)

// ── 2. .filter() ─────────────────────────────────────────────

console.log('\n--- 2. .filter() ---')

const inStock = products.filter(p => p.stockQuantity > 0)
console.log('in stock count:', inStock.length)
console.log('in stock:', inStock.map(p => p.name))

const techProducts = products.filter(p => p.category === 'tech')
console.log('tech products:', techProducts.map(p => p.name))

const affordable = products.filter(p => p.price < 100)
console.log('under $100:', affordable.map(p => p.name))

// ── 3. filter() to "delete" — the React pattern ──────────────

console.log('\n--- 3. Removing an item (React pattern) ---')

const beforeDelete = [...products]
const afterDelete = beforeDelete.filter(p => p.id !== 2)

console.log('before:', beforeDelete.map(p => p.id))
console.log('after:', afterDelete.map(p => p.id))
console.log('original unchanged:', beforeDelete.map(p => p.id))

// In React state: setProducts(products.filter(p => p.id !== deletedId))

// ── 4. .find() ───────────────────────────────────────────────

console.log('\n--- 4. .find() ---')

const laptop = products.find(p => p.id === 1)
console.log('found:', laptop?.name)  // 'Laptop'

const missing = products.find(p => p.id === 99)
console.log('missing:', missing)     // undefined

// Always check for undefined before using the result
if (laptop) {
  console.log('Laptop price:', laptop.price)
}

// ── 5. .some() and .every() ──────────────────────────────────

console.log('\n--- 5. .some() and .every() ---')

const anyOutOfStock = products.some(p => p.stockQuantity === 0)
console.log('any out of stock?', anyOutOfStock)   // true

const allInStock = products.every(p => p.stockQuantity > 0)
console.log('all in stock?', allInStock)          // false

const hasExpensive = products.some(p => p.price > 500)
console.log('any over $500?', hasExpensive)        // true

// Useful for form validation:
const formFields = ['username', 'email', 'password']
const filled = { username: 'alice', email: '', password: 'secret' }
const allFilled = formFields.every(field => filled[field] !== '')
console.log('all fields filled?', allFilled)       // false

// ── 6. .reduce() ─────────────────────────────────────────────

console.log('\n--- 6. .reduce() ---')

// Total price of all products
const totalValue = products.reduce((acc, p) => acc + p.price, 0)
console.log('total value:', totalValue.toFixed(2))

// Total stock across all products
const totalStock = products.reduce((acc, p) => acc + p.stockQuantity, 0)
console.log('total stock:', totalStock)

// Count by category
const countByCategory = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] ?? 0) + 1
  return acc
}, {})
console.log('count by category:', countByCategory)

// Find the most expensive product
const mostExpensive = products.reduce((best, p) =>
  p.price > best.price ? p : best
)
console.log('most expensive:', mostExpensive.name)

// ── 7. Chaining ──────────────────────────────────────────────

console.log('\n--- 7. Chaining ---')

// In-stock tech products, sorted by price, name only
const inStockTech = products
  .filter(p => p.stockQuantity > 0)
  .filter(p => p.category === 'tech')
  .map(p => ({ name: p.name, price: p.price }))

console.log('in-stock tech products:', inStockTech)

// Total value of in-stock office products
const officeTotal = products
  .filter(p => p.category === 'office')
  .filter(p => p.stockQuantity > 0)
  .reduce((acc, p) => acc + p.price * p.stockQuantity, 0)

console.log('office inventory value: $' + officeTotal.toFixed(2))

// ── 8. Immutability ──────────────────────────────────────────

console.log('\n--- 8. Immutability ---')

const original = [{ id: 1, name: 'Laptop', price: 999 }]

// ❌ Wrong — mutates the original array
// original.push({ id: 2, name: 'Mouse', price: 29 })
// original[0].price = 799

// ✓ Correct — creates new arrays/objects
const withNewItem = [...original, { id: 2, name: 'Mouse', price: 29 }]
const withUpdatedPrice = original.map(p =>
  p.id === 1 ? { ...p, price: 799 } : p
)

console.log('original:', original)
console.log('with new item:', withNewItem)
console.log('with updated price:', withUpdatedPrice)
console.log('original still unchanged:', original[0].price)  // 999
