let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    res.render('list-room') 
})
// router.get('/:id',(req,res)=>{
//     res.render('view room details');
// })

module.exports = router;
