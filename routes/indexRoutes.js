let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    req.params.active="home"
    res.render('home-page', req.params) 
})
// router.get('/:id',(req,res)=>{
//     res.render('view room details');
// })

module.exports = router;
