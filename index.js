var userOne = {
  username: 'adib',
  fullname: 'adib firman',
  login() {
    console.log(this.username, 'has been login')
  },
  logout() {
    console.log(this.username, 'has been logout')
  }
}

console.log(userOne.username)