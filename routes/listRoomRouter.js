let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
        console.log('helo from alll')

    var roomControllers = require('../controllers/roomController')
    roomControllers.getAll()
        .then(data => {
            newdata = data.map(item => {
                item = item.dataValues
                return item
            })
            res.locals.rooms = newdata
            console.log(newdata.length)
            res.render('list-room', req.params)
        })
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    console.log('call from listrom id')
    var roomController = require('../controllers/roomController')
    roomController.getByID(req.params.id)
        .then(room => {
            res.locals.room = room
            res.render('details', req.params)
        }).catch(err => next(err))
})

module.exports = router;
