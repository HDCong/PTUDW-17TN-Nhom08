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
            // console.log('data ne', data)
            if (data != null && data.dataValues != null) {
                // console.log("BOOKING: ", data.dataValues)
                // res.redirect('/')
                res.render('booking-details', data.dataValues)
            }
            else res.redirect('/')
        }).catch(er => next(er))
})
router.get('/delete', (req, res, next) => {

    var bookingController = require('../controllers/bookingController')
    bookingController.deleteByID(req.query.id).then(
        data => {
            if (data > 0) res.redirect('/list')
            else res.redirect('/')
        }
    ).catch(er => next(er))
})
module.exports = router