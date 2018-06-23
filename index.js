function User(email, password) {
  this.email = email
  this.password = password
  this.online = false
}

User.prototype.login = function () {
  this.online = true
  console.log(this.email, 'has logged in')
}

User.prototype.logout = function () {
  this.online = false
  console.log(this.email, 'has logged out')
}

const userOne = new User('adib@dib.com', 'dib123')

console.log(userOne)
userOne.login()