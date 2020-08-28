let express = require('express')
let router = express.Router()

router.get('/',(req,res)=>{
    // if(req.session.user)
        // return res.render('', req.params) 

})
//post review
router.post('/',(req,res,next)=>{

    console.log('req body ne: ',req.body)
    let controller = require('../controllers/reviewController')
    if(req.body.rating==null|| req.body.rating.trim()=='')
        req.body.rating=1
    let review={
        userId:req.body.userId,
        roomId:req.body.roomId,
        rating: req.body.rating,
        content:req.body.content,
        numberoflikes:0
    }
    controller.add(review)
    .then(data=>{
        res.redirect('/list/'+req.body.roomId)
    }).catch(er=>next(er))
})  

// post reply review
router.post('/:id',(req,res,next)=>{
    let controller  = require('../controllers/commentController')
    let reply={
        userid: req.body.userid,
        reviewid:req.body.reviewId,
        content: req.body.content,
    }
    controller.add(reply)
    .then(data=>{
        console.log(data)
        res.redirect('/list/'+req.body.roomid)
    })
    .catch(er=>next(er))
})

module.exports = router