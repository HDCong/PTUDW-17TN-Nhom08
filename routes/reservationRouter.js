let express = require('express');
const { compareSync } = require('bcryptjs');
let router = express.Router()

router.get('/', (req, res, next) => {
    console.log('query', req.query)
    if (req.query.reservationid == null || req.query.reservationid.trim() == '')
        res.redirect('/')

    var bookingController = require('../controllers/bookingController')
    bookingController.getByReservation(req.query.reservationid)
        .then(data => {
            console.log("BOOKING: ", data.dataValues)
            // res.redirect('/')
            res.render('booking-details', data.dataValues)
        }).catch(er => next(er))
})
module.exports = router