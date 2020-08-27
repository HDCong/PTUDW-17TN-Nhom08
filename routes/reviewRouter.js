let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    // if(req.session.user)
        // return res.render('', req.params) 

})
router.post('/',(req,res,next)=>{
    console.log('post data review')
    // console.log(req.params)
    res.redirect('/list/2')
    // res.status(200)
})  
router.post('/:id',(req,res,next)=>{
    console.log('id reply')
    // console.log(req.params)
    console.log(req)
    // res.send('ok')
    res.redirect('/list/2')
})

module.exports = router