let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
    var roomControllers = require('../controllers/roomController')
    //paging ne
    // neu capacity ko chon, thi mac dinh la 1000
    // 
    if (req.query.capacity == null || isNaN(req.query.capacity)) {
        req.query.capacity = 1000
    }
    if (req.query.rating == null || isNaN(req.query.rating)) {
        req.query.rating = 0
    }
    if (req.query.min == null || isNaN(req.query.min)) {
        req.query.min = 0
    }
    if (req.query.max == null || isNaN(req.query.max)) {
        req.query.max = 1000
    }
    if (req.query.sort == null) {
        req.query.sort = 'id'
    }
    if (req.query.show == null || isNaN(req.query.show)) {
        req.query.show = 8
    }
    if (req.query.search == null || req.query.search.trim() == '') {
        req.query.search = ''
    }
    if (req.query.page == null || isNaN(req.query.page)) {
        req.query.page = 1
    }

    roomControllers.getAll(req.query)
        .then(data => {
            newdata = data.rows.map(item => {
                item = item.dataValues
                return item
            })

            res.locals.rooms = newdata
            res.locals.pagination = {
                page: parseInt(req.query.page),
                limit: parseInt(req.query.show),
                totalRows: data.count
            }
            req.params.active = "list"
            res.render('list-room', req.params)
        })
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    console.log('call from listrom id')
    var roomController = require('../controllers/roomController')
    var user = req.session.user
    roomController.getByID(req.params.id)
        .then(room => {
            room.user = user;
            res.locals.room = room
            res.render('details', req.params)
        }).catch(err => next(err))
})

module.exports = router;
