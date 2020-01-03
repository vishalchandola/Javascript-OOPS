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

var userTwo = {
    email: 'vishu@yopmail.com',
    name: 'Vishu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

var userThree = {
    email: 'kartik@yopmail.com',
    name: 'Kartik',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

// userOne.name = 'Kartik'
// userOne['email']
// userOne['name'] = 'Ankit'
// var prop = 'name';
// userOne[prop]
// userOne.age = 28;



console.log(userOne.name);