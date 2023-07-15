export interface User {
  name: string
  age?: number // with ? its optional
  id: number
  email: string
}

// user.name
// user.email
// instead this

// do this:
let { name: userName, email: userLogin }: User = {
  // can rename name to userName
  name: 'Roma',
  id: 1,
  email: 'roma@gmail.com',
}

interface Employees extends User {
  salary: number
}

let employee: Employees = {
  name: 'John',
  id: 2,
  email: 'john123@gmail.com',
  salary: 20000,
}

export interface Login {
  login(): User
}

let users: User[] = [
  {
    name: 'Roma',
    id: 1,
    email: 'roma@gmail.com',
  },
  {
    name: 'John',
    id: 2,
    email: 'john123@gmail.com',
  },
  {
    name: 'Dina',
    id: 3,
    email: 'dina@gmail.com',
  },
]

let user1 = users[0]
let user2 = users[1]
console.log(user1, user2)

let allUsers = [...users]
console.log(allUsers)

let result = allUsers.filter((user) => user.id % 2 == 0)

console.log(result)
