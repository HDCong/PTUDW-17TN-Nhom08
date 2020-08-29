let express = require('express')
let router = express.Router()
let homepageController = require('../controllers/homepageController')

router.get('/',(req,res)=>{
    req.params.active="home"
    // res.render('booking-details', req.params) 
    homepageController.getTopThree()
                    .then(rooms => {
                        topInfo = rooms.map(item => {
                            if(item.imagepath.length<1) {
                                item.imagepath="../images/logos/logo_v1.png"
                            }
                            return {
                                id: item.id,
                                imagepath: item.imagepath
                            }
                        })
                        
                        req.params.topInfo = topInfo
                        res.render('home-page', req.params) 
                    })
})

module.exports = router;
