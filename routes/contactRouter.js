let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    req.params.active="contact"
    res.render('contact', req.params) 
})
// router.get('/:id',(req,res)=>{
//     res.render('view room details');
// })

module.exports = router;
