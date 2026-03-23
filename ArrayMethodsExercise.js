// ============================================================
// Session 3 Exercise: Array Methods
// Run with: node exercise.js
// ============================================================
//
// You are working with a product catalog from the Spring backend.
// Complete each TODO. Run the file to check your output.
// ============================================================

// ── Data (do not change) ─────────────────────────────────────

const products = [
  { id: 1, name: 'Laptop',    price: 999.99,  stockQuantity: 5,  category: 'tech'   },
  { id: 2, name: 'Mouse',     price: 29.99,   stockQuantity: 0,  category: 'tech'   },
  { id: 3, name: 'Desk',      price: 299.99,  stockQuantity: 3,  category: 'office' },
  { id: 4, name: 'Chair',     price: 199.99,  stockQuantity: 8,  category: 'office' },
  { id: 5, name: 'Monitor',   price: 399.99,  stockQuantity: 2,  category: 'tech'   },
  { id: 6, name: 'Keyboard',  price: 79.99,   stockQuantity: 0,  category: 'tech'   },
]

const cartItems = [
  { productId: 1, name: 'Laptop',   price: 999.99, qty: 1 },
  { productId: 3, name: 'Desk',     price: 299.99, qty: 1 },
  { productId: 4, name: 'Chair',    price: 199.99, qty: 2 },
]

// ── 1. .map() ─────────────────────────────────────────────────
// TODO: Using .map(), create an array of strings `priceTags` where
//   each string is formatted like: "Laptop: $999.99"
//   Use .toFixed(2) for the price.
// Log priceTags.


// TODO: Using .map(), create an array `discounted` where every product's
//   price is reduced by 10%. Keep all other fields the same (use spread).
//   Do NOT modify the original products array.
// Log the name and price of the first item in discounted.
// Log that products[0].price is still 999.99 (prove no mutation).


// ── 2. .filter() ─────────────────────────────────────────────
// TODO: Using .filter(), create `inStock` — only products with stockQuantity > 0.
// Log: "In stock: X products" (where X is the count).


// TODO: Using .filter(), create `techProducts` — only items in the 'tech' category.
// Log the names of all tech products.


// TODO: Using .filter() + .map(), get the names of all in-stock office products.
//   Chain them in one expression.
// Log the result.


// ── 3. .find() ───────────────────────────────────────────────
// TODO: Using .find(), get the product with id === 5.
//   If found, log: "Found: Monitor at $399.99"
//   If not found, log: "Product not found"
//   Use optional chaining or an if-check — don't assume it exists.


// TODO: Using .find(), try to find a product with id === 99.
//   Log the result (should be undefined — no crash).


// ── 4. .some() and .every() ──────────────────────────────────
// TODO: Use .some() to check if any product is out of stock (stockQuantity === 0).
// Log: "Any out of stock: true/false"


// TODO: Use .every() to check if all products cost more than $10.
// Log: "All over $10: true/false"


// TODO: You have a simple checkout form below.
//   Use .every() to check whether all required fields are filled in (non-empty string).
//   Log: "Form valid: true/false"

const formData = { name: 'Alice', email: 'alice@example.com', address: '' }
const requiredFields = ['name', 'email', 'address']


// ── 5. .reduce() ─────────────────────────────────────────────
// TODO: Use .reduce() to calculate the total value of the entire product catalog
//   (sum of all prices). Log: "Catalog total: $<amount>" with .toFixed(2)


// TODO: Use .reduce() on cartItems to calculate the cart total.
//   Each item has a price and qty — multiply them and sum.
// Log: "Cart total: $<amount>" with .toFixed(2)


// TODO: Use .reduce() to build an object that counts how many products
//   are in each category.
//   Expected: { tech: 4, office: 2 }
// Log the result.


// ── 6. Chaining ──────────────────────────────────────────────
// TODO: In one chained expression (no intermediate variables), get the names
//   of all in-stock tech products sorted... wait, no sorting needed.
//   Just: filter to in-stock, filter to tech category, map to names.
// Log the result.


// TODO: Using chaining, calculate the total inventory value
//   of in-stock office products only (price × stockQuantity per item, then sum).
// Log: "Office inventory value: $<amount>" with .toFixed(2)


// ── 7. Immutability ──────────────────────────────────────────
// TODO: Simulate adding a new product to the catalog using spread.
//   Create `updatedCatalog` — a new array with all original products plus:
//   { id: 7, name: 'Webcam', price: 89.99, stockQuantity: 12, category: 'tech' }
//   Do NOT use .push().
// Log the length of both arrays to confirm the original is unchanged.


// TODO: Simulate updating the price of product with id === 1 to 899.99.
//   Create `pricedCatalog` using .map() and spread — do not mutate the original.
// Log products[0].price (should still be 999.99) and pricedCatalog[0].price (should be 899.99).


// TODO: Simulate deleting the product with id === 2 (Mouse) from the catalog.
//   Use .filter() — this is the correct React pattern.
// Log the ids in the resulting array (should not include 2).
