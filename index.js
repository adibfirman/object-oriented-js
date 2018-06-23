class User {
  constructor(email, password) { // passing parameter class with function `constructor`
    this.email = email
    this.password = password
    this.score = 0
  }

  login () {
    console.log(this.email, 'has been login')

    return this
  }

  logout () {
    console.log(this.email, 'has been logout')

    return this
  }

  updatedScore () {
    this.score++
    console.log(this.email, 'have score is', this.score)

    return this
  }
}

class Admin extends User {
  deleteUser(listUser, user) {
    const users = listUser.filter(u => u.email !== user.email)

    console.log(users)
  }
}

// register the user
const userOne = new User('adibfirman01@test.com', 'adibfirman01')
const userTwo = new User('adibfirman02@test.com', 'adibfirman02')

// register admin user
const adminUser = new Admin('admin@admin.com', 'admin123')
const listUser = [userOne, userTwo, adminUser]

adminUser.deleteUser(listUser, userTwo)
