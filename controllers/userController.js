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

controller.updateUser = (username,detail) => {
    return new Promise((resolve,reject)=> {
        userModel.update(
            {
                name: detail.name,
                phone: detail.phone,
                gender: detail.gender,
                birthday: detail.birthday
            }, 
            {
                where: {
                    username: username
                }
            }).then((result=>resolve(result)))
            .catch(err => reject(new Error(err)))
    })
}

controller.updatePassword = (username,password) => {
    var salt = bcrypt.genSaltSync(10);
    hashPass = bcrypt.hashSync(password, salt);

    return new Promise((resolve,reject)=> {
        userModel.update(
            {
                password: hashPass
            },
            {
                where: {
                    username: username
                }
            }).then((result=>resolve(result)))
            .catch(err=>reject(new Error(err)))
    })
}

controller.updateImagePath = (username,path) => {
    return new Promise((resolve,reject)=> {
        userModel.update(
            {
                avatarpath: path
            },
            {
                where: {
                    username: username
                }
            }).then((result=>resolve(result)))
            .catch(err=>reject(new Error(err)))
    })
} 

controller.comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}



module.exports=controller