class EmployeeInformation {
  // private id: number // now we cant get access this property
  #id: number // is we use # we gotta use it in constructor too. recommended to use like this
  protected name: string // it wont be visible outside the class
  address: string

  get empId(): number {
    return this.#id
  }

  set empId(id: number) {
    this.#id = id
  }

  static getEmployeeCount() {
    // can be accessed with the class name
    return 50
  }

  // only 1 construct in 1 class allowed
  constructor(id: number, name: string, address: string) {
    this.#id = id
    // this.#id = id // is we use # we gotta use it in constructor too
    this.name = name
    this.address = address
  }

  getNameWithAddress(): string {
    return `Name: ${this.name}, Address: ${this.address}`
  }
}

console.log(EmployeeInformation.getEmployeeCount())

class Manager extends EmployeeInformation {
  constructor(id: number, name: string, address: string) {
    super(id, name, address)
  }
}

let roma = new EmployeeInformation(1, 'Roma', 'Pushkina')
roma.empId = 100
console.log(roma)
console.log(roma.empId)

let address = roma.getNameWithAddress()
console.log(address)

let mike = new EmployeeInformation(2, 'Mike', 'Highway')

console.log(mike.getNameWithAddress())

// roma.id = 1
// roma.name = 'Roma'
// roma.address = 'pushkina'
