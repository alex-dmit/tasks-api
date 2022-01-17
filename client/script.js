function helloFunc(name) {
  return 'Hello, ' + name
}

console.log(helloFunc('John'))
const decoratedHelloFunc = toUpperCaseDecorator(helloFunc)
console.log(decoratedHelloFunc('Jane'))

function toUpperCaseDecorator(func) {
  return function(str) {
    return func(str.toUpperCase())
  }
}