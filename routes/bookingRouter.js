let express = require('express');
const { compareSync } = require('bcryptjs');
let router = express.Router()

router.get('/', (req, res,next) => {

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
        req.query.in = now
    }
    if (req.query.out == null || isNaN(req.query.out)) {
        req.query.out = tomorrow
    }
    if (req.query.guest == null || isNaN(req.query.guest)) {
        req.query.guest = 1
    }
    var information={
        checkin: req.query.in,
        checkout:req.query.out,
        guest: req.query.guest,
    }
    var user = req.session.user

    var roomController = require('../controllers/roomController')
    roomController.getInfRoom(req.query.room)
        .then(room => {
            console.log(room)
            newdata =room.dataValues
            newdata.user = user;
            newdata.information =information
            res.locals.room = newdata
            res.render('booking', req.params)
        }).catch(err => next(err))
})
router.post('/',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;
