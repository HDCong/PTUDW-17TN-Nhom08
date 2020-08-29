var controller = {}

var model = require('../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var Room = model.Room

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {

        let options = {
            attributes: ['id', 'imagepath', 'name', 'count', 'price', 'capacity', 'rating', 'area'],
            where: {
                price: {
                    [Op.gte]: query.min,
                    [Op.lte]: query.max
                }
            }
        }
        if (query.search) {
            options.where.name = {
                [Op.iLike]: `%${query.search}`
            }
        }
        if (query.capacity > 0) {
            options.where.capacity = {
                [Op.lte]: query.capacity
            }
        }
        if (query.rating > 0) {
            options.where.rating = query.rating
        }
        if (query.show > 0) {
            console.log(query.show)
            options.limit = query.show
            options.offset = query.show * (query.page - 1)
        }
        if (query.sort) {
            switch (query.sort) {
                case 'capacity':
                    options.order = [['capacity', 'ASC']]; break
                case 'price':
                    options.order = [['price', 'ASC']]; break
                case 'area':
                    options.order = [['area', 'ASC']]; break
                case 'rating':
                    options.order = [['rating', 'DESC']]; break
                default:
                    options.order = [['price', 'ASC']]; break
            }
        }
        Room.findAndCountAll(options).then((data => resolve(data)))
            .catch(err => reject(new Error(err)))
    })
}
controller.getInfRoom = (id) => {
    return new Promise((resolve, reject) => {
        Room.findOne({
            where: { id: id }
        }).then((res => {
            resolve(res)
        })).catch(err=>reject(err))
    })
}
controller.getByID = (id) => {
    return new Promise((resolve, reject) => {
        Room.findOne({
            where: { id: id }
        }).then((res => {
            // console.log('a')
            room = res.dataValues
            return model.RoomImage.findAll({
                where: { roomid: id }
            })
        })).then(listImages => {
            // console.log('b')
            room.listImages = listImages
            return model.RoomService.findAll({
                where: { roomid: id }
            })
        }).then(roomServices => {
            // console.log('c')
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
            // console.log('d')
            room.reviews = review
            return model.Room.findAll({
                where: { isbooking: false },
                order: [Sequelize.literal('RANDOM()')],
                limit: 3
            })
        }).then(pickrandom => {
            // console.log('e')
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

controller.getImageByRoomID = (roomid) => {
    return new Promise((resolve,reject)=> {
        Room.findOne({
            where: {id: roomid}
        }).then(data => resolve(data.dataValues.imagepath))
        .catch(err=>reject(new Error(err)))
    })
}


module.exports = controller