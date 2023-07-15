import { Login, User } from './interface'
// import * as UserLogin from './interface' not recommended to use alias

interface Address {
  street: string
  city: string
  state: string
  pin: string
}

class EmployeeInformation implements Login {
  // private id: number // now we cant get access this property
  #id: number // is we use # we gotta use it in constructor too. recommended to use like this
  protected name: string // it wont be visible outside the class
  address: Address

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
  constructor(id: number, name: string, address: Address) {
    this.#id = id
    // this.#id = id // is we use # we gotta use it in constructor too
    this.name = name
    this.address = address
  }

  login(): User {
    return { name: 'Roma', id: 1, email: 'roma@gmail.com' }
  }

  getNameWithAddress(): string {
    return `Name: ${this.name}, Address: ${this.address.street}`
  }
}

console.log(EmployeeInformation.getEmployeeCount())

class Manager extends EmployeeInformation {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address)
  }
}

let roma = new EmployeeInformation(1, 'Roma', {
  street: 'abc',
  city: 'Astana',
  state: 'Astana',
  pin: '54321',
})
roma.empId = 100
console.log(roma)
console.log(roma.empId)

let address = roma.getNameWithAddress()
console.log(address)

let mike = new EmployeeInformation(2, 'Mike', {
  street: 'efg',
  city: 'Moscow',
  state: 'Moscow',
  pin: '01000',
})

console.log(mike.getNameWithAddress())

// roma.id = 1
// roma.name = 'Roma'
// roma.address = 'pushkina'
