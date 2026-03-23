#!/usr/bin/env node

// ============================================================
// Session 1 Exercise: JS Syntax & Data Structures
// Run with: node exercise.js
// ============================================================
//
// You are building a small product catalog.
// Complete each TODO. Run the file to check your output.
// ============================================================

// ── 1. Variables ─────────────────────────────────────────────
// TODO: Declare a constant TAX_RATE of 0.08
// TODO: Declare a variable discount that starts at 0 (you will change it later)
const TAX_RATE=0.08
let discount=0


// ── 2. Objects ───────────────────────────────────────────────
// TODO: Create an object called `laptop` with these fields:
//   id: 1, name: 'Pro Laptop', price: 1200, inStock: true
//   and a nested object: specs: { ram: 16, storage: 512 }
const laptop = {
    id: 1,
    name: 'Pro Laptop',
    price: 1200,
    inStock: true,
    specs: {
        ram: 16,
        storage: 512
    }
}


// ── 3. Template Literals ─────────────────────────────────────
// TODO: Using template literals, log a string like:
//   "Product: Pro Laptop | Price: $1200"
// Access the fields from your laptop object.
console.log(`Product: ${laptop.name} | Price: $${laptop.price}`)


// ── 4. Object Destructuring ──────────────────────────────────
// TODO: Destructure `name` and `price` from laptop.
//   Also destructure `ram` from laptop.specs in the same statement.
// Then log: "Name: Pro Laptop, Price: 1200, RAM: 16"

const {name, price, specs: {ram}} = laptop
console.log(`Name: ${name}, Price: ${price}, RAM: ${ram}`)


// ── 5. Spread — update without mutating ──────────────────────
// TODO: Create `saleLaptop` using spread.
//   It should be a copy of `laptop` with price changed to 999.
//   The original laptop.price must stay 1200.
// Log both prices to confirm.

saleLaptop = {...laptop, price: 999}
console.log(laptop.price, saleLaptop.price)


// ── 6. Arrays & Array Destructuring ──────────────────────────
const catalog = [
  { id: 1, name: 'Pro Laptop', price: 1200 },
  { id: 2, name: 'Wireless Mouse', price: 45 },
  { id: 3, name: 'USB-C Hub', price: 89 },
]

// TODO: Using array destructuring, pull the first item into `first`
//   and collect the rest into `others`.
// Log first.name and the length of others.

const [first, ...others] = catalog
console.log(first.name, others.length)


// ── 7. Rest Parameters ───────────────────────────────────────
// TODO: Write a function `totalPrice` that accepts any number of
//   product objects and returns the sum of their prices.
//   Use rest parameters.
// Call it with all three items from catalog and log the result.
function totalPrice(...prods) {
    return prods.map(x => x.price).reduce((a,b)=>a+b, 0)
}

console.log(totalPrice(...catalog))


// ── 8. Optional Chaining ─────────────────────────────────────
const reviewedProduct = {
  name: 'USB-C Hub',
  reviews: { count: 42, average: 4.5 },
}
const unreviewedProduct = {
  name: 'Wireless Mouse',
}

// TODO: Safely read `reviews.average` from both objects using optional chaining.
//   If missing, fall back to the string 'No reviews yet' using ??.
// Log both results.
const reviews = [reviewedProduct, unreviewedProduct].map(x => x?.reviews?.average ?? "No reviews");
console.log(reviews)


// ── 9. Shorthand Properties ──────────────────────────────────
// TODO: You have these two variables:
const category = 'Electronics'
const brand = 'Acme'
// Build an object `meta` using shorthand property names — no colons.
// Log meta.
const meta = {category, brand}
console.log(meta)


// ── 10. Reassign & Compute ───────────────────────────────────
// TODO: Set discount to 0.15 (15%).
//   Compute finalPrice for laptop using: price * (1 - discount) * (1 + TAX_RATE)
//   Round it to 2 decimal places with .toFixed(2).
// Log: "Final price after discount and tax: $<amount>"
const discountedPrice = laptop.price * (1-discount) * (1+TAX_RATE).toFixed(2)
console.log(`Final price after discount and tax: $${discountedPrice}`)
