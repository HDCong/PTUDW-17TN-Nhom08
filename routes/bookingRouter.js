let express = require('express');
const { compareSync } = require('bcryptjs');
let router = express.Router()

router.get('/', (req, res, next) => {
    // if not room and userid not integer : redirect to our rooms
    if (req.query.room == null || isNaN(req.query.room)) {
        res.redirect('/list')
    }
    // check date in out
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    const tomorrow = new Date(now)
    tomorrow.setDate(now.getDate() + 1)
    if (req.query.in == null || isNaN(req.query.in)) {
        req.query.in = now.valueOf()
    }
    if (req.query.out == null || isNaN(req.query.out)) {
        req.query.out = tomorrow.valueOf()
    }
    if (req.query.guest == null || isNaN(req.query.guest)) {
        req.query.guest = 1
    }
    var information = {
        checkin: req.query.in,
        checkout: req.query.out,
        guest: req.query.num,
    }
    var user = req.session.user

    var roomController = require('../controllers/roomController')
    roomController.getInfRoom(req.query.room)
        .then(room => {
            // console.log(room)
            newdata = room.dataValues
            newdata.user = user;
            newdata.information = information
            res.locals.room = newdata
            res.render('booking', req.params)
        }).catch(err => next(err))
})
router.post('/', (req, res, next) => {
    console.log("Post booking req: " + req.body)
    if (req.body.userId == null || req.body.userId == undefined || req.body.userId.trim() == '') {
        req.body.userId = 1
    }
    // console.log('req.body: ', req.body.userId)
    // console.log(req.body.userId)

    var bookingController = require('../controllers/bookingController')
    bookingController.add(req.body)
        .then(data => {
            console.log("BOOKING: ", data.dataValues)
            // res.redirect('/')
            res.render('booking-details', data.dataValues)
        }).catch(er => next(er))
})

module.exports = router;
