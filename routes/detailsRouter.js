let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    res.send('details') 
})
router.get('/:id',(req,res)=>{
    res.render('view room details');
})

module.exports = router;
