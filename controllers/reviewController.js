var controller = {}

var model = require('../models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

var Review = model.Review
controller.add = (review) => {
    return new Promise((resolve, reject) => {

        Review.findOne({
            where: {
                userId: review.userId,
                roomId: review.roomId,
            }
        }).then(data => {
            if (data) {
                return Review.update(review, {
                    where: {
                        userId: review.userId,
                        roomId: review.roomId,
                    }
                })
            } else {
                return Review.create(review)
            }
        }).then(data => {
             resolve(data) }).catch(er => reject(new Error))
    })
}

module.exports = controller