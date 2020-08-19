let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
    var roomControllers = require('../controllers/roomController')
    roomControllers.getAll()
        .then(data => {
            newdata = data.map(item => {
                item = item.dataValues
                return item
            })
            res.locals.rooms = newdata
            console.log(newdata.length)
            res.render('list-room')
        })
        .catch(err => next(err))
})
router.get('/:id', (req, res, next) => {
    var roomController = require('../controllers/roomController')
    roomController.getByID(req.params.id)
        .then(room => {
            res.locals.room = room
            console.log(room)
            res.render('details')
        }).catch(err => next(err))
})

module.exports = router;
