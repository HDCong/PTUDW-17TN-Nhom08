var controller = {}

var model = require('../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var Comment = model.CommentReply

controller.add=(comment)=>{
    return new Promise((resolve, reject)=>{ 
        Comment.create(comment)
        .then(data=>{
            console.log('controler',data)
            resolve(data)
            
        })
        .catch(er=>reject(new Error))
    })
}

module.exports = controller