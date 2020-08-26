var controller = {}

var model = require('../models')
var Sequelize = require('sequelize');

var Room = model.Room

controller.getTopThree = () => {
    return new Promise((resolve, reject) => {
        Room.findAll({
            limit: 3,
            order: [['count', 'DESC']]
        }).then((data => resolve(data)))
            .catch(err => reject(new Error(err)))
    })
}

module.exports = controller