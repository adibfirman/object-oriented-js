function User(email, password) {
  this.email = email
  this.password = password
  this.online = false
  this.login = function () {
    this.online = true

    console.log(this.email, 'just login in')
  }
}

const userOne = new User('adib@dib.com', 'dib123')

console.log(userOne)
userOne.login()