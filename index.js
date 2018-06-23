class User {
  constructor(email, password) { // passing parameter class with function `constructor`
    this.email = email
    this.password = password
  }

  login () {
    console.log(this.email, 'has been login')
  }

  logout () {
    console.log(this.email, 'has been logout')
  }
}

const userOne = new User('adibfirman@test.com', 'testing123')

console.log(userOne.login())