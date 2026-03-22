// ============================================================
// Session 4: Asynchronous JavaScript
// Run with: node index.js
// ============================================================

// Helper: simulate a network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Simulated API functions — these will be replaced by real axios calls in Session 10
async function fakeGetUser(id) {
  await delay(200)
  if (id === 99) throw new Error('User not found')
  return { id, username: 'alice', email: 'alice@example.com' }
}

async function fakeGetProducts() {
  await delay(300)
  return [
    { id: 1, name: 'Laptop',  price: 999.99 },
    { id: 2, name: 'Mouse',   price: 29.99  },
    { id: 3, name: 'Monitor', price: 399.99 },
  ]
}

async function fakeGetProduct(id) {
  await delay(150)
  const products = await fakeGetProducts()
  const product = products.find(p => p.id === id)
  if (!product) throw new Error(`Product ${id} not found`)
  return product
}

// ── 1. Callbacks — The Old Way ────────────────────────────────

console.log('--- 1. Callbacks ---')

function callbackGetUser(id, callback) {
  setTimeout(() => {
    if (id === 99) {
      callback(new Error('User not found'), null)
    } else {
      callback(null, { id, username: 'alice' })
    }
  }, 100)
}

callbackGetUser(1, (err, user) => {
  if (err) {
    console.error('Error:', err.message)
    return
  }
  console.log('Callback result:', user)
})

// Callback hell example (just to show the problem)
callbackGetUser(1, (err, user) => {
  if (err) return console.error(err)
  callbackGetUser(2, (err, user2) => {
    if (err) return console.error(err)
    callbackGetUser(3, (err, user3) => {
      if (err) return console.error(err)
      console.log('Callback hell: three nested calls')
    })
  })
})

// ── 2. Promises ───────────────────────────────────────────────

console.log('\n--- 2. Promises ---')

// Creating a Promise manually
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true
    if (success) {
      resolve({ id: 1, data: 'success' })
    } else {
      reject(new Error('Something went wrong'))
    }
  }, 100)
})

myPromise
  .then(result => console.log('Promise resolved:', result))
  .catch(err => console.error('Promise rejected:', err.message))
  .finally(() => console.log('Promise settled (always runs)'))

// Promise chain — flat, readable
fakeGetUser(1)
  .then(user => {
    console.log('Got user:', user.username)
    return fakeGetProduct(1)  // return next promise
  })
  .then(product => {
    console.log('Got product:', product.name)
  })
  .catch(err => {
    console.error('Chain error:', err.message)
  })

// ── 3. async / await ─────────────────────────────────────────

async function runAsyncExamples() {
  console.log('\n--- 3. async/await ---')

  // Basic async/await
  const user = await fakeGetUser(1)
  console.log('User:', user.username)

  const products = await fakeGetProducts()
  console.log('Products count:', products.length)

  // ── 4. try/catch Error Handling ────────────────────────────

  console.log('\n--- 4. try/catch ---')

  // Successful case
  try {
    const product = await fakeGetProduct(2)
    console.log('Found product:', product.name, '$' + product.price)
  } catch (error) {
    console.error('Error:', error.message)
  }

  // Error case
  try {
    const missing = await fakeGetProduct(99)
    console.log('This will not run')
  } catch (error) {
    console.error('Caught error:', error.message)  // 'Product 99 not found'
  } finally {
    console.log('finally always runs — good for hiding loading spinners')
  }

  // ── 5. Missing await (common mistake) ──────────────────────

  console.log('\n--- 5. Missing await mistake ---')

  // ❌ Missing await — result is a Promise object, not the data
  const pendingPromise = fakeGetProducts()
  console.log('Without await:', pendingPromise instanceof Promise)  // true — it's a Promise!

  // ✓ With await
  const actualProducts = await fakeGetProducts()
  console.log('With await:', Array.isArray(actualProducts))  // true — it's the data

  // ── 6. Promise.all — Parallel Requests ─────────────────────

  console.log('\n--- 6. Promise.all ---')

  const start = Date.now()

  // Sequential — slower
  const user1 = await fakeGetUser(1)
  const prods1 = await fakeGetProducts()
  console.log(`Sequential took: ${Date.now() - start}ms`)

  const start2 = Date.now()

  // Parallel — faster
  const [user2, prods2] = await Promise.all([
    fakeGetUser(1),
    fakeGetProducts()
  ])
  console.log(`Parallel took: ${Date.now() - start2}ms`)
  console.log('Both loaded:', user2.username, prods2.length, 'products')

  // Promise.all fails fast — if one rejects, the whole thing rejects
  try {
    const results = await Promise.all([
      fakeGetUser(1),
      fakeGetUser(99)  // this will throw
    ])
  } catch (error) {
    console.log('Promise.all failed because one request failed:', error.message)
  }

  // ── 7. Async in useEffect (React preview) ──────────────────

  console.log('\n--- 7. The useEffect async pattern (preview) ---')

  // In React you cannot pass an async function directly to useEffect.
  // Instead, define the async function inside and call it:
  //
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const data = await fetchProducts()
  //       setProducts(data)
  //     } catch (error) {
  //       setError(error.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   load()
  // }, [])
  //
  // We'll use exactly this pattern starting in Session 9.

  // Simulate the pattern with plain functions
  let products_state = []
  let loading = true
  let error = null

  async function loadProducts() {
    try {
      products_state = await fakeGetProducts()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }

  await loadProducts()
  console.log('Loading:', loading)           // false
  console.log('Error:', error)               // null
  console.log('Products:', products_state.map(p => p.name))
}

// Run all examples
runAsyncExamples().then(() => {
  console.log('\n✓ All async examples complete')
})
