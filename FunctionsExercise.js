#!/usr/bin/env node
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
const fullGreeting = (name, role) => `Hello ${name}! You are logged in as ${role}`
// TODO: Write an arrow function `isAdult` that takes age and returns
//   true if age >= 18, false otherwise. Use implicit return.
const isAdult = age => age >=18


// Test:
console.log(fullGreeting('Alice', 'admin'))
console.log(isAdult(17), isAdult(18))


// ── 2. Default Parameters ────────────────────────────────────
// TODO: Write an arrow function `formatScore` that takes (score, unit = 'pts')
//   and returns a string like "88 pts" or "42 xp".
//   Use implicit return.

const formatScore = (score, units='pts') => `${score} ${units}`


// Test:
console.log(formatScore(88))         // "88 pts"
console.log(formatScore(42, 'xp'))   // "42 xp"


// ── 3. Ternary ───────────────────────────────────────────────
// TODO: Write an arrow function `ageStatus` that takes age and returns
//   'Adult' if age >= 18, otherwise 'Minor'.
//   Use a ternary — one line, implicit return.

const ageStatus = age => (age >=18) ? "Adult" : "Minor";

// TODO: Write a function `roleBadge` that takes a role string and returns
//   the matching badge using an object map + ??.
//   Mappings: admin → '★ Admin', editor → '✎ Editor', viewer → '👁 Viewer'
//   Any other role → 'Guest'
//   Mappings: admin → '★ Admin', editor → 
const badges = {admin: 'Admin',editor: '✎ Editor',viewer: '👁 Viewer'}
const roleBadge = role => badges[role] ?? "Guest"


// Test:
console.log(ageStatus(17), ageStatus(25))
console.log(roleBadge('admin'), roleBadge('guest'), roleBadge('unknown'))


// ── 4. && Short-Circuit ──────────────────────────────────────
// TODO: Write an arrow function `adminOnlyMessage` that takes a user object.
//   If user.role === 'admin', return "Access granted: secret dashboard".
//   Otherwise return null.
//   Use && (no if statement, no ternary).

const adminOnlyMessage = user => ((user.role === 'admin') && "Access granted: secret dashboard") || null


// Test:
console.log(adminOnlyMessage(users[0]))  // "Access granted..."
console.log(adminOnlyMessage(users[1]))  // null


// ── 5. || vs ?? ──────────────────────────────────────────────
// TODO: For each user in the array, log two lines using console.log:
//   a) user.score using ||  as fallback to 'No score'
//   b) user.score using ??  as fallback to 'No score'
//
// Expected output shows where || and ?? differ (score of 0).
// Use a regular for...of loop (we haven't done .map() yet).

for (let user of users) {
    console.log(user.name, user.score || "No score")
}
for (let user of users) {
    console.log(user.name, user.score ?? "No score")
}


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

const newFormatScore = score => {
    val = score ?? "No score"
    return val === "No score" ? val : formatScore(val)
}
const bio = bio => bio ?? "No bio"

const summarize = u => `${roleBadge(u.role)} ${u.name} | ${ageStatus(u.age)} | Score: ${newFormatScore(u.score)} |Bio: ${bio(u.bio)}`
for (let user of users) {
    console.log(summarize(user))
}
