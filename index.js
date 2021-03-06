var express = require('express')
const bodyParser = require('body-parser')

var app = express()

//body parser 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//user session
let session = require('express-session')
app.use(session({
    cookie: { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 },
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}))

// middlewares
let getDataMiddleware = require('./middlewares/getData')
let makeDataMiddleware = require('./middlewares/makeData')
app.use(getDataMiddleware)
app.use(makeDataMiddleware)


//public static server
app.use(express.static(__dirname + '/public'))

// Handlebars
var expressHbs = require('express-handlebars')
var helper = require('./controllers/helpers')
var paging = require('express-handlebars-paginate')
var hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createCarousel: helper.createCarousel,
        createRoomServices: helper.createRoomServices,
        showReviews: helper.showReviews,
        createOtherRooms: helper.createOtherRooms,
        createOverallRating: helper.createOverallRating,
        AvgRating: helper.AvgRating,
        ifEquals: helper.ifEquals,
        UserReview: helper.UserReview,
        createPagination: paging.createPagination,
        setYearPicker: helper.setYearPicker,
        setMonthPicker: helper.setMonthPicker,
        setDatePicker: helper.setDatePicker,
        getHistoryDetail: helper.getHistoryDetail,
        createToBooking: helper.createToBooking,
        createReservation: helper.createReservation,
        generatedate: helper.generatedate,
        getnights: helper.getnights,
        generateCancel: helper.generateCancel,
    }
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
// Routes 

app.use('/', require('./routes/indexRoutes'))
app.use('/user', require('./routes/userRouter'))
app.use('/booking', require('./routes/bookingRouter'))
app.use('/contact', require('./routes/contactRouter'))
app.use('/about-us', require('./routes/aboutRouter'))
app.use('/list', require('./routes/listRoomRouter'))
app.use('/auth', require('./routes/authRouter'))
app.use('/review', require('./routes/reviewRouter'))
app.use('/reservation', require('./routes/reservationRouter'))

app.get('/sync', (req, res) => {
    var models = require('./models')
    models.sequelize.sync()
        .then(() => {
            res.send('database sync completed!')
        })
})

// Set port and start server
var PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})