function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, "has logged out");
};

var userOne = new User("vishal@hotmail.com", "Vishal");
var userTwo = new User("kartik@yopmail.com", "Kartik");

console.log(userOne);
userTwo.login();
