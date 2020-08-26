var controller = {}

var model = require('../models')
var Sequelize = require('sequelize');

var Room = model.Room

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Room.findAll({
            attributes: ['id', 'imagepath', 'count'],
            where: { isbooking: false }
        }).then((data => resolve(data)))
            .catch(err => reject(new Error(err)))
    })
}
controller.getByID = (id) => {
    return new Promise((resolve, reject) => {
        Room.findOne({
            where: { id: id }
        }).then((res => {
            room = res.dataValues
            return model.RoomImage.findAll({
                where: { roomid: id }
            })
        })).then(listImages => {
            room.listImages = listImages
            return model.RoomService.findAll({
                where: { roomid: id }
            })
        }).then(roomServices => {
            room.services = roomServices
            return model.Review.findAll({
                where: { roomId: id },
                include: [{
                    model: model.User,
                    where: {
                    },
                    attributes :['avatarpath','username']
                }]
            })
        }).then(review => {
            // console.log(revie w)
            room.reviews = review
            return model.Room.findAll({
                where: { isbooking: false },
                order: [Sequelize.literal('RANDOM()')],
                limit: 3
            })
        }).then(pickrandom => {
            room.random = pickrandom
            resolve(room)
        }).catch(err => reject(new Error(err)))
    })
}

module.exports = controller