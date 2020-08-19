var controller={}

var model =require('../models')
var RoomImages = model.RoomImage

controller.getByID= (id)=>{
    return new Promise((resolve,reject)=>{
        RoomImages.findAll({
            where: {roomid:id}
        }).then((data=>resolve(data)))
        .catch(err =>reject(new Error(err)))
    })
}
module.exports=controller