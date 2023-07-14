function add(num1: number, num2: number, num3?: number): number {
  // num3? is optional parameter
  return num3 ? num1 + num2 + num3 : num1 + num2
}

console.log(add(1, 1))

function add2(num1: number, num2: number): void {
  // void means function wont return anything
  num1 + num2
}

console.log(add2(2, 2))

const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3 // num3 has default value. this is required parameter

console.log(sub(2, 3))

const mult = function (num1: number, num2: number): number {
  return num1 * num2
}

console.log(mult(2, 2))

function add3(num1: number, num2: number, ...num3: number[]): number {
  // here how can we use rest operator to pass n number of numbers
  return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}

let numbers = [1, 2, 3, 4, 5]
console.log(add3(2, 3, ...numbers))
// console.log(add3(2, 3, 4, 5, 6, 7))

function getItems<Type>(items1: Type[], items2: Type[]): Type[] {
  // there can be everything else instead of <Type>
  return new Array<Type>().concat(items1, items2) // concat merges arrays
}

let concatResult = getItems<number>([1, 2, 3, 4, 5], [6, 7, 8, 9])
console.log(concatResult)

let concatString = getItems<string>(['a', 'b', 'c', 'd', 'e'], ['f', 'g', 'h'])
console.log(concatString)
