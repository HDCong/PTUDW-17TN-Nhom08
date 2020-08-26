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
            console.log('a')
            room = res.dataValues
            return model.RoomImage.findAll({
                where: { roomid: id }
            })
        })).then(listImages => {
            console.log('b')
            room.listImages = listImages
            return model.RoomService.findAll({
                where: { roomid: id }
            })
        }).then(roomServices => {
            console.log('c')
            room.services = roomServices
            return model.Review.findAll({
                where: { roomId: id },
                include: [{
                    model: model.User, as: 'parent',
                    attributes: ['avatarpath', 'username']
                }]
            })
        }).then(review => {
            // console.log(revie w)
            console.log('d')
            room.reviews = review
            return model.Room.findAll({
                where: { isbooking: false },
                order: [Sequelize.literal('RANDOM()')],
                limit: 3
            })
        }).then(pickrandom => {
            console.log('e')
            room.random = pickrandom
            return model.Review.findAll({
                where: { roomId: id },
                include: [{
                    model: model.User, as: 'parent',
                    attributes: ['avatarpath', 'username']
                }, {
                    model: model.CommentReply,
                    include: [
                        {
                            model: model.User, as: 'child',
                            attributes: ['avatarpath', 'username']
                        }
                    ]
                },

                ]
            })

        }).then(replies => {
            replies = replies.map(item => {
                item = item.dataValues
                return item
            })
            room.reviews = replies
            resolve(room)
        }).catch(err => reject(new Error(err)))
    })
}

module.exports = controller