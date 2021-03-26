const express = require('express');
const User = require('../core/user');
const router = express.Router();


const user = User(find);
console.log(user);

router.get('/', (req, res, next) => {
    res.render('index', { title: "My application" });
})

router.get('/home', (req, res, next) => {
    res.send('Home Page');
});



router.post('/login', (req, res, next) => {

    user.login(req.body.username, req.body.password, function(result) {
        if (result) {
            res.send('Logged in as: ' + result.username);
        } else {
            res.send('Username/Password incorrect');
        }
    })
});




router.post('/register', (req, res, next) => {

    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };

    user.create(userInput, function(lastId) {
        if (lastId) {
            res.send('welcome' + userInput.username);
        } else {
            console.log('error...');
        }
    });

});
module.exports = router;