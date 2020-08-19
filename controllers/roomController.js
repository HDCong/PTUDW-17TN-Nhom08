var controller = {}

var model = require('../models')
var Room = model.Room

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Room.findAll({
            attributes: ['id', 'imagepath', 'count']
        }).then((data => resolve(data)))
            .catch(err => reject(new Error(err)))
    })
}
controller.getByID = (id) => {
    return new Promise((resolve, reject) => {
        Room.findOne({
            where: { id: id }
        }).then((res => {
            // console.log(res.datcaValues)
            room = res.dataValues
            return model.RoomImage.findAll({
                where: { roomid: id }
            })
        })).then(listImages => {
            room.listImages = listImages
            return model.RoomService.findAll({
                where:{roomid:id}
            })
        }).then(roomServices=>{
            room.services = roomServices
            return model.Review.findAll({
                where:{roomId:id}
            })
            
        }).then(review=>{
            // console.log(revie w)
            room.reviews = review
            return Room.fin
            resolve(room)
        }).then(pickrandom=>{

        })
            .catch(err => reject(new Error(err)))
    })
}
module.exports = controller