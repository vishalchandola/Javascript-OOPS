var userOne = {
    email: 'vishal@yopmail.com',
    name: 'Vishal',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);