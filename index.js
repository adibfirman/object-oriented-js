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

const userOne = new User('adibfirman@test.com', 'testing123')

userOne.login().updatedScore().updatedScore().updatedScore().logout()