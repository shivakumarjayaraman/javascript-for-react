// ============================================================
// products.js — product data module
// Session 5 Exercise: complete the default export and named export below.
// ============================================================

const catalog = [
  { id: 1, name: 'Laptop',   price: 999.99, stockQuantity: 5,  category: 'tech'   },
  { id: 2, name: 'Mouse',    price: 29.99,  stockQuantity: 0,  category: 'tech'   },
  { id: 3, name: 'Desk',     price: 299.99, stockQuantity: 3,  category: 'office' },
  { id: 4, name: 'Chair',    price: 199.99, stockQuantity: 8,  category: 'office' },
  { id: 5, name: 'Monitor',  price: 399.99, stockQuantity: 2,  category: 'tech'   },
]

// TODO: Add a DEFAULT export — a function called `getProducts` that returns
//   a copy of the catalog array (use spread so the original can't be mutated).


// TODO: Add a NAMED export — a function called `findById` that takes
//   (productsArray, id) and returns the matching product, or undefined.
//   Use .find().
