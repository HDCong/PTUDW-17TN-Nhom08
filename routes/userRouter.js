let express = require('express')
let helper = require('../controllers/helpers')
let router = express.Router()

const upload = require('../middlewares/uploadImage');
const Resize = require('../middlewares/resize');
const path = require('path');

let userController = require('../controllers/userController');

router.get('/',(req,res)=>{
    if(req.session.user) {
        return res.render('user', req.params) 
    }
    res.redirect('/auth/login')
})

router.post('/update',(req,res,next)=>{
    let detail = {
        gender: req.body.gender==1? true : false,
        birthday: helper.birthdayToMillis(req.body.date, req.body.month, req.body.year)
    }
    if(req.body.name!=='') detail.name=req.body.name;
    if(req.body.phone!=='') detail.phone=req.body.phone;

    userController.updateUser(req.session.user.username,detail)
                .then(result=> {
                    req.session.user.gender=detail.gender;
                    req.session.user.name=detail.name;
                    req.session.user.phone=detail.phone;
                    req.session.user.birthday=detail.birthday;

                    res.redirect('/user')
                })
                .catch(error => {
                    res.status(500).send({
                        message: "Something went wrong!"
                    })
                })

})

router.post('/change-password',(req,res,next)=>{
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let confirmPassword = req.body.confirmPassword;

    if(!userController.comparePassword(oldPassword,req.session.user.password)){
        return res.render('user')
    } 
    if(newPassword!==confirmPassword) {
        return res.render('user')
    }

    userController.updatePassword(req.session.user.username,newPassword)
                .then(result=> {
                    res.redirect('/user')
                })
                .catch(err => {
                    res.redirect('/user')
                })
})

router.post('/image', upload.single('image'), async function (req, res) {
    // folder upload
    const imagePath = path.join(__dirname, '../public/images/user-avatars');
    // call class Resize
    const fileUpload = new Resize(req.session.user.username, imagePath);
    if (!req.file) {
        res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    
    userController.updateImagePath(req.session.user.username, `images/user-avatars/${req.session.user.username}.png`)
                .then(result=> {
                    req.session.user.avatarpath = `images/user-avatars/${req.session.user.username}.png`;
                    return res.redirect('/user')
                })
                .catch(err=>next(err))

    // return res.status(200).json({ name: filename });
});

module.exports = router;