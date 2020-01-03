class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "Just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "Just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

var userOne = new User("vishal@hotmail.com", "Vishal");
var userTwo = new User("kartik@yopmail.com", "Kartik");
userOne
  .login()
  .updateScore()
  .updateScore()
  .logout();

console.log(userOne);
// console.log(userTwo);

// userOne.login();
// userTwo.logout();
