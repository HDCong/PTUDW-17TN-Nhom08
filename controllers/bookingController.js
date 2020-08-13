let controller ={};
let models = require('../models')

let Booking =models.Booking;

controller.getAll= ()=>{
    return new Promise((resolve,rej)=>{
        Booking
            .findAll({
                attributes:['id','']
            })
            .then(data=>resolve(data))
            .catch(error=>rej(new Error(error)))
    })
}