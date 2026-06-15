const loginData = {

    validUser: {
        username: 'akesh@centrimglobal.com',
        password: 'Demo@321'
    },

    invalidUsername: {
        username: 'wronguser@test.com',
        password: 'Demo@321'
    },

    invalidPassword: {
        username: 'akesh@centrimglobal.com',
        password: 'WrongPassword'
    },

    invalidCredentials: {
        username: 'wronguser@test.com',
        password: 'WrongPassword'
    },

    blankUsername: {
        username: '',
        password: 'Demo@321'
    },

    blankPassword: {
        username: 'akesh@centrimglobal.com',
        password: ''
    },
    usernameWithSpaces: {
    username: ' akesh@centrimglobal.com ',
    password: 'Demo@321'
    }


};

module.exports = loginData;