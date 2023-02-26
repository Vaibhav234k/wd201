const args = require('minimist')(process.argv.slice(2), {
  alias: {
    n: 'name',
    a: 'age'
  },
  default: {
    greeting: 'Hello'
  }
})
console.log(args)
