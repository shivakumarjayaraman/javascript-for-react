// ============================================================
// Session 5 Exercise: Modules & Modern Tooling
// Run with: node --input-type=module < exercise.js
//        or rename to exercise.mjs and run: node exercise.mjs
// ============================================================
//
// You are building a small utility library split across modules.
// Two files need to be completed: format.js and products.js
// This file imports from them — fix the imports and exports
// in those files to make everything work.
//
// Complete each TODO. Run the file to check your output.
// ============================================================

// ── 1. Named Imports from format.js ──────────────────────────
// TODO: Open format.js and implement the three exported functions.
//   Then uncomment the import below.

// import { formatPrice, formatCategory, formatStockStatus } from './format.js'

// Test (uncomment after implementing format.js):
// console.log('--- 1. format.js named exports ---')
// console.log(formatPrice(999.99))           // "$999.99"
// console.log(formatPrice(29.9))             // "$29.90"
// console.log(formatCategory('tech'))        // "Tech"
// console.log(formatCategory('office'))      // "Office"
// console.log(formatStockStatus(0))          // "Out of Stock"
// console.log(formatStockStatus(3))          // "In Stock"
// console.log(formatStockStatus(1))          // "Low Stock"  (qty === 1)


// ── 2. Default Import from products.js ───────────────────────
// TODO: Open products.js and implement the default export.
//   Then uncomment the import below.

// import getProducts from './products.js'

// Test (uncomment after implementing products.js):
// console.log('\n--- 2. products.js default export ---')
// const products = getProducts()
// console.log('Product count:', products.length)   // 5
// console.log('First product:', products[0].name)  // 'Laptop'


// ── 3. Named + Default from the same file ────────────────────
// TODO: products.js also exports a named function `findById`.
//   Add that named export to products.js, then uncomment the import below.
//   findById(products, id) should return the product with the matching id,
//   or undefined if not found.

// import getProducts, { findById } from './products.js'

// Test (uncomment after adding findById to products.js):
// console.log('\n--- 3. Named + default from same file ---')
// const allProducts = getProducts()
// const laptop = findById(allProducts, 1)
// const missing = findById(allProducts, 99)
// console.log('Found:', laptop?.name)    // 'Laptop'
// console.log('Missing:', missing)       // undefined


// ── 4. Alias an import ───────────────────────────────────────
// TODO: Import formatPrice from format.js but rename it to `$` using `as`.
//   Then use it to log a price.

// import { formatPrice as $ } from './format.js'

// Test (uncomment):
// console.log('\n--- 4. Import alias ---')
// console.log($('Price:', 399.99))   // "$399.99"


// ── 5. Combine modules ───────────────────────────────────────
// TODO: Using both modules together, log a formatted summary for each product.
//   Format: "Laptop | Tech | $999.99 | In Stock"
//   Use formatPrice, formatCategory, formatStockStatus, and getProducts.
//   Chain nothing — just a loop with console.log.

// console.log('\n--- 5. Combined output ---')
// (your code here)


// ── 6. Reflection questions ───────────────────────────────────
// Answer these by uncommenting and editing the strings below.

// const Q1 = "When would you use a DEFAULT export instead of a NAMED export?"
// const A1 = "TODO"

// const Q2 = "What happens if you import { formatPrice } but format.js exports it as a default?"
// const A2 = "TODO"

// const Q3 = "Why should node_modules never be committed to git?"
// const A3 = "TODO"

// console.log('\n--- 6. Reflection ---')
// console.log('Q1:', Q1, '\nA1:', A1)
// console.log('Q2:', Q2, '\nA2:', A2)
// console.log('Q3:', Q3, '\nA3:', A3)
