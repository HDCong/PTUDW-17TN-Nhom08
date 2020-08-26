let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    if(req.session.user)
        return res.render('user', req.params) 
    res.redirect('/auth/login')
})
// router.get('/:id',(req,res)=>{
//     res.render('view room details');
// })

module.exports = router;
