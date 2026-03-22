// ============================================================
// Session 2 Exercise: Functions & Control Flow
// Run with: node exercise.js
// ============================================================
//
// You are writing logic for a user dashboard.
// Complete each TODO. Run the file to check your output.
// ============================================================

// ── Data (do not change) ─────────────────────────────────────

const users = [
  { id: 1, name: 'Alice', role: 'admin',  age: 30, score: 0,   bio: null      },
  { id: 2, name: 'Bob',   role: 'editor', age: 25, score: 88,  bio: ''        },
  { id: 3, name: 'Carol', role: 'viewer', age: 17, score: null, bio: 'Hi!'    },
  { id: 4, name: 'Dan',   role: 'guest',  age: 22, score: 0,   bio: undefined },
]

// ── 1. Arrow Functions ───────────────────────────────────────
// TODO: Write an arrow function `fullGreeting` that takes (name, role)
//   and returns: "Hello, Alice! You are logged in as admin."
//   Use a template literal. Use implicit return (no braces).


// TODO: Write an arrow function `isAdult` that takes age and returns
//   true if age >= 18, false otherwise. Use implicit return.


// Test:
// console.log(fullGreeting('Alice', 'admin'))
// console.log(isAdult(17), isAdult(18))


// ── 2. Default Parameters ────────────────────────────────────
// TODO: Write an arrow function `formatScore` that takes (score, unit = 'pts')
//   and returns a string like "88 pts" or "42 xp".
//   Use implicit return.


// Test:
// console.log(formatScore(88))         // "88 pts"
// console.log(formatScore(42, 'xp'))   // "42 xp"


// ── 3. Ternary ───────────────────────────────────────────────
// TODO: Write an arrow function `ageStatus` that takes age and returns
//   'Adult' if age >= 18, otherwise 'Minor'.
//   Use a ternary — one line, implicit return.


// TODO: Write a function `roleBadge` that takes a role string and returns
//   the matching badge using an object map + ??.
//   Mappings: admin → '★ Admin', editor → '✎ Editor', viewer → '👁 Viewer'
//   Any other role → 'Guest'


// Test:
// console.log(ageStatus(17), ageStatus(25))
// console.log(roleBadge('admin'), roleBadge('guest'), roleBadge('unknown'))


// ── 4. && Short-Circuit ──────────────────────────────────────
// TODO: Write an arrow function `adminOnlyMessage` that takes a user object.
//   If user.role === 'admin', return "Access granted: secret dashboard".
//   Otherwise return null.
//   Use && (no if statement, no ternary).


// Test:
// console.log(adminOnlyMessage(users[0]))  // "Access granted..."
// console.log(adminOnlyMessage(users[1]))  // null


// ── 5. || vs ?? ──────────────────────────────────────────────
// TODO: For each user in the array, log two lines using console.log:
//   a) user.score using ||  as fallback to 'No score'
//   b) user.score using ??  as fallback to 'No score'
//
// Expected output shows where || and ?? differ (score of 0).
// Use a regular for...of loop (we haven't done .map() yet).


// ── 6. Putting it together ───────────────────────────────────
// TODO: Write a function `summarize` that takes a user object and logs:
//
//   "[roleBadge] Alice | Adult | Score: 88 pts | Bio: Hi!"
//
//   Rules:
//   - Use roleBadge() from step 3
//   - Use ageStatus() from step 3
//   - Use formatScore() from step 2 — but only if score is not null/undefined (use ??)
//     If score is null/undefined, show 'No score'
//   - Use ?. and ?? for bio — fall back to 'No bio'
//
// Then call summarize() on each user in the array.

