let controller = {};
let models = require('../models');
const { compareSync } = require('bcryptjs');

let Booking = models.Booking;

controller.getAll = () => {
    return new Promise((resolve, rej) => {
        Booking
            .findAll({
                attributes: ['id', '']
            })
            .then(data => resolve(data))
            .catch(error => rej(new Error(error)))
    })
}

controller.getHistory = (userid) => {
    return new Promise((resolve, reject) => {
        Booking.findAll({
            where: { userId: userid }
        }).then(data => resolve(data))
            .catch(err => reject(new Error(err)))
    })
}
controller.add = (booking) => {
    // console.log(booking)
    return new Promise((resolve, reject) => {
        Booking.create(booking)
            .then(data => {
                // console.log('controler', data)
                resolve(data)
            })
            .catch(er => reject(new Error(er)))
    })
}
controller.getByReservation = (id) => {
    return new Promise((resolve, reject) => {
        Booking.findOne({
            where: { reservationid: id }
        }).then(data => {
            // console.log(data)
            resolve(data)
        })
            .catch(err => reject(new Error(err)))
    })
}
controller.deleteByID = (id) => {
    return new Promise((resolve, reject) => {
        Booking.destroy({
            where: { reservationid: id }
        }).then(data => {
            console.log(data)
            resolve(data)
        }).catch(err => reject(new Error(err)))
    })
}
module.exports = controller