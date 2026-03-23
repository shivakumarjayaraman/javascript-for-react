// ============================================================
// Session 4 Exercise: Asynchronous JavaScript
// Run with: node exercise.js
// ============================================================
//
// You are writing async data-fetching logic for a product app.
// The fake API functions below simulate real network calls.
// Complete each TODO. Run the file to check your output.
// ============================================================

// ── Fake API (do not change) ──────────────────────────────────

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function apiGetUser(id) {
  await delay(100)
  if (id === 99) throw new Error('User not found')
  const users = {
    1: { id: 1, name: 'Alice', role: 'admin'  },
    2: { id: 2, name: 'Bob',   role: 'editor' },
  }
  const user = users[id]
  if (!user) throw new Error(`User ${id} not found`)
  return user
}

async function apiGetProducts() {
  await delay(150)
  return [
    { id: 1, name: 'Laptop',   price: 999.99, category: 'tech'   },
    { id: 2, name: 'Desk',     price: 299.99, category: 'office' },
    { id: 3, name: 'Monitor',  price: 399.99, category: 'tech'   },
  ]
}

async function apiGetProduct(id) {
  await delay(100)
  const products = await apiGetProducts()
  const product = products.find(p => p.id === id)
  if (!product) throw new Error(`Product ${id} not found`)
  return product
}

async function apiCreateProduct(data) {
  await delay(200)
  if (!data.name) throw new Error('Product name is required')
  return { id: Math.floor(Math.random() * 1000) + 10, ...data }
}

// ── Run all exercises ─────────────────────────────────────────
// All your code goes inside runExercises below (async context required).

async function runExercises() {

  // ── 1. Basic async/await ─────────────────────────────────────
  // TODO: Call apiGetUser(1) using await and store the result in `user`.
  // Log: "User: Alice (admin)"


  // TODO: Call apiGetProducts() using await and store the result in `products`.
  // Log the number of products returned: "Products loaded: 3"


  // ── 2. try/catch — Handling Errors ───────────────────────────
  // TODO: Call apiGetProduct(2) inside a try/catch block.
  //   On success, log: "Found: Desk at $299.99"
  //   On error, log: "Error: <message>"


  // TODO: Call apiGetProduct(99) inside a try/catch block.
  //   This WILL throw. Catch the error and log: "Caught: Product 99 not found"


  // ── 3. finally ───────────────────────────────────────────────
  // TODO: Simulate a loading state using three variables:
  //   let data = null
  //   let error = null
  //   let loading = true
  //
  //   Inside a try/catch/finally block:
  //   - try:     await apiGetProduct(1) and assign to data
  //   - catch:   assign error.message to error
  //   - finally: set loading to false
  //
  // After the block, log all three variables.
  // Expected: data is the product object, error is null, loading is false.


  // ── 4. Missing await (spot the bug) ──────────────────────────
  // TODO: The line below has a bug. Fix it and explain in a comment why it was wrong.
  //   Hint: log the type of `result` before and after your fix.

  const result = apiGetProducts()   // ← bug is here
  console.log('Result is a Promise (bug):', result instanceof Promise)

  // Your fix:


  // ── 5. Promise.all — Parallel Requests ───────────────────────
  // TODO: Load apiGetUser(1) and apiGetProducts() in PARALLEL using Promise.all.
  //   Destructure the results into `[currentUser, allProducts]`.
  // Log: "Loaded in parallel: Alice, 3 products"


  // TODO: Use Promise.all to load product id 1 AND product id 2 at the same time.
  //   Destructure into `[productA, productB]`.
  // Log both product names on one line.


  // ── 6. Promise.all — Error Handling ──────────────────────────
  // TODO: Try to load apiGetUser(1) and apiGetUser(99) in parallel with Promise.all.
  //   Wrap in try/catch.
  //   The whole Promise.all will fail because one request fails — catch and log the error.


  // ── 7. async function — Loading Pattern ──────────────────────
  // TODO: Write an async function `loadDashboard()` that:
  //   1. Declares: let user = null, products = [], error = null, loading = true
  //   2. In a try block: loads apiGetUser(1) and apiGetProducts() IN PARALLEL
  //      and assigns the results
  //   3. In a catch block: assigns error.message to error
  //   4. In a finally block: sets loading to false
  //   5. Returns { user, products, error, loading }
  //
  // Call loadDashboard() and log the result.
  // Expected: user.name is 'Alice', products.length is 3, loading is false


  // ── 8. React useEffect pattern (preview) ─────────────────────
  // TODO: The async-inside-useEffect pattern is:
  //
  //   useEffect(() => {
  //     async function load() {
  //       try { ... } catch { ... } finally { ... }
  //     }
  //     load()
  //   }, [])
  //
  // Simulate this pattern WITHOUT React:
  //   Write a function `simulateEffect` (not async) that:
  //   - Defines an inner async function `load`
  //   - load() calls apiGetProducts() with try/catch/finally
  //     and logs the products once loaded
  //   - Calls load() at the end
  //
  // Call simulateEffect() and confirm it logs the products.
  simulateEffect()

}

runExercises().then(() => {
  console.log('\n✓ Exercises complete')
}).catch(err => {
  console.error('Unhandled error:', err.message)
})
