let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    req.params.active="about"
    res.render('about-us', req.params) 
})
// router.get('/:id',(req,res)=>{
//     res.render('view room details');
// })

module.exports = router;
