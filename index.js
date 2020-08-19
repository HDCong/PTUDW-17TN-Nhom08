var express = require('express')
const bodyParser = require('body-parser')

var app = express()

//public static server
app.use(express.static(__dirname + '/public'))

// Handlebars
var expressHbs = require('express-handlebars')
var helper = require('./controllers/helpers')
var hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        createCarousel: helper.createCarousel,
        createRoomServices: helper.createRoomServices,
        showReviews: helper.showReviews,
    }
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
// Routes 

app.use('/', require('./routes/indexRoutes'))
app.use('/details', require('./routes/detailsRouter'))
app.use('/user', require('./routes/userRouter'))
app.use('/booking', require('./routes/bookingRouter'))
app.use('/contact', require('./routes/contactRouter'))
app.use('/about', require('./routes/aboutRouter'))
app.use('/list', require('./routes/listRoomRouter'))

// app.get('/',(req,res)=>{
//     res.render('home-page')
// })

// app.get('/user',(req,res)=>{
//     res.render('user')
// })

// app.get('/booking',(req,res)=>{
//     res.render('booking')
// })
// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })
// app.get('/about-us',(req,res)=>{
//     res.render('about-us')
// })
// app.get('/list-room',(req,res)=>{
//     res.render('list-room')
// })
// app.get('/details',(req,res)=>{
//     res.render('details')
// })
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