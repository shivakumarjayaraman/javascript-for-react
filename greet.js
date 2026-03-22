// greet.js — default export
// A module can have ONE default export — usually the main thing it provides

export default function greet(name = 'World') {
  return `Hello, ${name}!`
}

// You can still have named exports alongside the default
export function greetFormal(firstName, lastName) {
  return `Good day, ${firstName} ${lastName}.`
}
