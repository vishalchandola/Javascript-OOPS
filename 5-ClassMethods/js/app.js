class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "Just logged in");
  }
  logout() {
    console.log(this.email, "Just logged out");
  }
}

var userOne = new User("vishal@hotmail.com", "Vishal");
var userTwo = new User("kartik@yopmail.com", "Kartik");

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();
