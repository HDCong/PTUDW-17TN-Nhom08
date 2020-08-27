let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController');
const helper = require('../controllers/helpers');

router.get('/login', (req,res,next)=> {
    res.render('login')
})

router.post('/login',(req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined)

    userController.getByUsername(username)
                .then(user => {
                    if(user) {
                        if(userController.comparePassword(password, user.password)) {
                            req.session.cookie.maxAge = keepLoggedIn ? 30*24*60*60*1000:null
                            req.session.user = user
                            res.redirect('/')
                        }
                        else {
                            res.render('login', {
                                message: "Incorrect password!",
                                type: "alert-danger"
                            });
                        }
                    }
                    else {
                        res.render('login', {
                            message: "Username does not exist!",
                            type: "alert-danger"
                        });
                    }
                })
})


router.get('/register',(req,res,next)=> {
    res.render('register')
})

router.post('/register',(req,res,next)=>{
    let user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        type: true
    }

    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined);

    if(user.password != confirmPassword) {
        return res.render('register', {
            message: 'Confirm password does not match!',
            type: "alert-danger"
        })
    }

    userController.getByEmail(user.email)
                .then(row => {
                    if(row) {
                        return res.render('register', {
                            message: `Email ${user.email} exists! Please choose another email address.`,
                            type: "alert-danger"
                        })
                    }
                    else {
                        userController.getByUsername(user.username)
                                    .then(row => {
                                        if(row != null) {
                                            return res.render('register', {
                                                message: `Username ${user.username} exists! Please choose another username.`,
                                                type: "alert-danger"
                                            })
                                        }
                                        else {
                                            return userController.createUser(user)
                                                            .then(user => {
                                                                if(keepLoggedIn) {
                                                                    req.session.cookie.maxAge = 30*24*60*60*1000
                                                                    req.session.user = user
                                                                    return res.redirect('/')
                                                                }
                                                                else {
                                                                    return res.render('login', {
                                                                        message: 'You have registered, now please login!',
                                                                        type: "alert-primary"
                                                                    })
                                                                }
                                                            })
                                        }
                                    })
                    }
                    
                })
                .catch(error => next(error));
})


router.get('/logout',(req,res,next)=> {
    req.session.user=null
    req.session.cookie.maxAge = null

    return res.redirect('/')
})

module.exports = router;
