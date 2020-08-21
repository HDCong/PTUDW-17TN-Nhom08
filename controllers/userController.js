var controller={}

var model =require('../models')
var userModel = model.User
var bcrypt = require('bcryptjs')

controller.getByUsername = (username)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({
            where: {username:username}
        }).then((data=>resolve(data)))
        .catch(err =>reject(new Error(err)))
    })
}

controller.getByEmail = (email)=>{
    return new Promise((resolve,reject)=>{
        userModel.findOne({
            where: {email:email}
        }).then((data=>resolve(data)))
        .catch(err =>reject(new Error(err)))
    })
}

controller.createUser = (user) => {
    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    return new Promise((resolve, reject)=> {
        userModel.create(user)
            .then((result=>resolve(result)))
            .catch(err => reject(new Error(err)))
    })
}

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports=controller