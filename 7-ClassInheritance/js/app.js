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

class Admin extends User {
  deletUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("vishal@hotmail.com", "Vishal");
var userTwo = new User("kartik@yopmail.com", "Kartik");
var admin = new Admin("admin@yopmail.com", "Admin");

var users = [userOne, userTwo, admin];

admin.deletUser(userOne);
console.log(users);

// userOne
//   .login()
//   .updateScore()
//   .updateScore()
//   .logout();

// console.log(userTwo);

// userOne.login();
// userTwo.logout();
