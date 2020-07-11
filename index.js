var express = require('express')
const bodyParser = require('body-parser')

var app = express()

//public static server
app.use(express.static(__dirname +'/public'))

// Handlebars
var expressHbs = require('express-handlebars')
var hbs =expressHbs.create({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts/',
    partialsDir: __dirname +'/views/partials/'
})

app.engine('hbs',hbs.engine)
app.set('view engine', 'hbs')
// Routes 

app.get('/',(req,res)=>{
    res.render('home-page')
})

app.get('/user',(req,res)=>{
    res.render('user')
})

app.get('/booking',(req,res)=>{
    res.render('booking')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about-us',(req,res)=>{
    res.render('about-us')
})
app.get('/list-room',(req,res)=>{
    res.render('list-room')
})
app.get('/details',(req,res)=>{
    res.render('details')
})

// Set port and start server
var PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})