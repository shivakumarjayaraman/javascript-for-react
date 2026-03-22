// ============================================================
// Session 5: Modules & Modern Tooling
// Run with: node index.js
// (Node requires --experimental-vm-modules or .mjs for ES modules,
//  but Vite handles this for React projects automatically)
// ============================================================

// ── 1. Named Imports ─────────────────────────────────────────

// Import specific named exports — must match the exported name exactly
const { add, subtract, multiply, divide, PI } = await import('./math.js')

console.log('--- 1. Named Imports ---')
console.log('add(3, 4):', add(3, 4))          // 7
console.log('subtract(10, 4):', subtract(10, 4)) // 6
console.log('multiply(3, 5):', multiply(3, 5)) // 15
console.log('PI:', PI)                          // 3.14159...

try {
  divide(10, 0)
} catch (err) {
  console.log('divide by zero caught:', err.message)
}

// ── 2. Default Import ─────────────────────────────────────────

const { default: greet, greetFormal } = await import('./greet.js')

console.log('\n--- 2. Default Import ---')
console.log(greet())            // 'Hello, World!'
console.log(greet('Alice'))     // 'Hello, Alice!'
console.log(greetFormal('Jane', 'Smith'))  // 'Good day, Jane Smith.'

// ── 3. What modules give you ─────────────────────────────────

console.log('\n--- 3. Module Benefits ---')

// Each module has its own scope. Variables here don't leak to other files.
const privateVar = 'This is only in index.js'

// If both math.js and greet.js defined a variable named 'result',
// they would NOT conflict — each module is isolated.

// ── 4. How this maps to React ────────────────────────────────

console.log('\n--- 4. In a React project you will write: ---')
console.log(`
  // Importing React itself
  import React from 'react'
  import { useState, useEffect } from 'react'

  // Importing your own components (default export)
  import ProductCard from './components/ProductCard'

  // Importing utility functions (named exports)
  import { formatPrice, formatDate } from './utils/format'

  // Importing third-party packages
  import axios from 'axios'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
`)

// ── 5. npm scripts (run from terminal, shown here as reference) ───

console.log('--- 5. npm workflow (for reference) ---')
console.log(`
  # Create a new React project with Vite
  npm create vite@latest my-app -- --template react

  # Enter the project folder
  cd my-app

  # Install dependencies listed in package.json
  npm install

  # Start the development server (http://localhost:5173)
  npm run dev

  # Add a new package (e.g., axios for HTTP requests)
  npm install axios

  # Build for production
  npm run build
`)
