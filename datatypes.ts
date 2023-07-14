let lname: string

lname = 'Roma'

let newName = lname.toUpperCase()
console.log(newName)

let age: number

age = 25
age = 25.5

let dob = '25'

let result = parseInt(dob) // turns string into number
// age = '25' // err

let isValid: boolean = true

console.log(isValid)

let empList: string[]

empList = ['Roma', 'Dima', 'Dasha']

let numList: Array<number>

numList = [1, 2, 3, 4, 5]

// let newNum = numList[4]

let result2 = numList.filter((num) => num % 2 === 0)
console.log(result2)

let result3 = empList.find((emp) => emp === 'Roma')
console.log(result3)

let sum = numList.reduce((acc, num) => acc + num) // can use to calculate the sum of the cart, for example
console.log(sum)

const enum Color { // const makes a magic with enums
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue

let swapNumbs: [firstNumber: number, secondNumber: number]

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1]
}

swapNumbs = swapNumbers(10, 20)

swapNumbs[0]
swapNumbs[1]

let department: any // gotta try to avoid any datatype. default type, without declaring it, is any

department = 'IT'
department = 10

function sumNums(num1: number, num2: number): any {
  return num1 + num2
}

let newSum = sumNums(10, 20)
console.log(newSum)
