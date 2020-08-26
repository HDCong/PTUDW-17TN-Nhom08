let express = require('express')
let router = express.Router()
let homepageController = require('../controllers/homepageController')

router.get('/',(req,res)=>{
    req.params.active="home"

    homepageController.getTopThree()
                    .then(rooms => {
                        topInfo = rooms.map(item => {
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
