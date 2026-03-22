// ============================================================
// Session 2: Functions & Control Flow
// Run with: node index.js
// ============================================================

// ── 1. Function Declarations vs Arrow Functions ───────────────

function greetDeclaration(name) {
  return `Hello, ${name}! (declaration)`
}

const greetArrow = (name) => {
  return `Hello, ${name}! (arrow)`
}

// Implicit return — single expression, no braces needed
const greetShort = (name) => `Hello, ${name}! (shorthand)`

// Single param — parens optional
const double = x => x * 2

// No params
const getTimestamp = () => Date.now()

// Multi-statement arrow
const clamp = (value, min, max) => {
  if (value < min) return min
  if (value > max) return max
  return value
}

console.log('--- 1. Arrow Functions ---')
console.log(greetDeclaration('Alice'))
console.log(greetArrow('Bob'))
console.log(greetShort('Carol'))
console.log('double(5):', double(5))
console.log('clamp(15, 0, 10):', clamp(15, 0, 10))

// ── 2. The 'this' Problem ─────────────────────────────────────

const user = {
  name: 'Alice',
  // Regular function — 'this' works correctly when called as a method
  greetRegular: function () {
    return `Hi, I'm ${this.name}`
  },
  // Arrow function — 'this' is inherited from the outer scope
  // (in this case, the module scope, not the object)
  greetArrow: () => {
    return `Hi, I'm ${this?.name}` // 'this' is NOT the user object
  },
}

console.log('\n--- 2. this ---')
console.log(user.greetRegular())  // "Hi, I'm Alice" ✓
console.log(user.greetArrow())    // "Hi, I'm undefined" — arrow doesn't bind 'this'

// The 'this' gets lost when you extract a method
const fn = user.greetRegular
// console.log(fn())  // Would crash or return undefined.name in strict mode

// Arrow functions capture 'this' from enclosing scope — useful in callbacks
const counter = {
  count: 0,
  start: function () {
    // Arrow function here preserves 'this' from start()
    const tick = () => {
      this.count++
    }
    tick()
    tick()
    tick()
  },
}
counter.start()
console.log('counter.count:', counter.count)  // 3

// ── 3. Ternary Operator ───────────────────────────────────────

const isLoggedIn = true
const isAdmin = false
const stockQuantity = 0

// Basic ternary
const status = isLoggedIn ? 'Welcome back!' : 'Please log in'
console.log('\n--- 3. Ternary ---')
console.log('status:', status)

// In-line calculations
const price = 100
const discount = isAdmin ? 0.2 : 0.1
const finalPrice = price * (1 - discount)
console.log('finalPrice:', finalPrice)

// Avoid nested ternaries — use a variable or object instead
const role = 'guest'
const roleLabel = role === 'admin' ? 'Admin'
  : role === 'guest' ? 'Guest'
  : 'User'
console.log('roleLabel:', roleLabel)  // readable, but only just

// Better for 3+ cases:
const roleMap = { admin: 'Admin', guest: 'Guest', user: 'User' }
const label = roleMap[role] ?? 'Unknown'
console.log('label (from map):', label)

// ── 4. Short-Circuit: && ─────────────────────────────────────

console.log('\n--- 4. && Short-circuit ---')

// && returns the first falsy, or the last value
console.log(true && 'show this')    // 'show this'
console.log(false && 'show this')   // false
console.log(null && 'show this')    // null
console.log('Alice' && 'Bob')       // 'Bob' — both truthy, returns last

// Practical use: only run if condition is true
const logIfAdmin = (isAdminUser) => isAdminUser && console.log('Admin action!')
logIfAdmin(true)   // logs
logIfAdmin(false)  // does nothing

// In React JSX (preview):
// {isLoggedIn && <UserProfile />}
// — if isLoggedIn is false, renders nothing
// — if isLoggedIn is true, renders <UserProfile />

// ── 5. Short-Circuit: || ─────────────────────────────────────

console.log('\n--- 5. || Short-circuit ---')

// || returns the first truthy value
const input1 = ''
const input2 = 'Alice'
const name = input1 || input2 || 'Anonymous'
console.log('name:', name)  // 'Alice'

// ⚠️ Problem: 0 is falsy!
const quantity = 0
const defaultQty = quantity || 10
console.log('defaultQty (BUG):', defaultQty)  // 10 — but we wanted 0!

// ── 6. Nullish Coalescing: ?? ─────────────────────────────────

console.log('\n--- 6. ?? Nullish Coalescing ---')

// ?? only falls back on null or undefined — not 0 or ''
const qty2 = 0
const safeQty = qty2 ?? 10
console.log('safeQty:', safeQty)   // 0 ✓ — 0 is a valid value

const emptyStr = ''
console.log(emptyStr ?? 'default') // '' ✓
console.log(null ?? 'default')     // 'default'
console.log(undefined ?? 'default') // 'default'

// Practical: safe API data access
const apiUser = { firstName: null, age: 0, bio: '' }
console.log(apiUser.firstName ?? 'Anonymous')  // 'Anonymous'
console.log(apiUser.age ?? 'Unknown')          // 0 ✓
console.log(apiUser.bio ?? 'No bio')           // '' ✓

// ── 7. null vs undefined ─────────────────────────────────────

console.log('\n--- 7. null vs undefined ---')

let declared           // undefined — exists but no value
let explicit = null    // null — explicitly "no value"

console.log('declared:', declared)    // undefined
console.log('explicit:', explicit)    // null

// == checks both null and undefined (loose equality)
console.log(declared == null)   // true
console.log(explicit == null)   // true

// === checks only the exact type
console.log(declared === null)  // false
console.log(explicit === null)  // true

// ── 8. Default Parameters ────────────────────────────────────

const greetDefault = (name = 'World', greeting = 'Hello') =>
  `${greeting}, ${name}!`

console.log('\n--- 8. Default Parameters ---')
console.log(greetDefault())               // 'Hello, World!'
console.log(greetDefault('Alice'))        // 'Hello, Alice!'
console.log(greetDefault('Bob', 'Hi'))    // 'Hi, Bob!'
console.log(greetDefault(undefined, 'Hey')) // 'Hey, World!' — undefined triggers default
