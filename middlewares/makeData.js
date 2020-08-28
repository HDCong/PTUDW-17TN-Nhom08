module.exports = function (req, res, next) {
    if (res.locals.isLoggedIn) {
        req.params.data = {
            isLoggedIn: true,
            username: res.locals.username,
            info: req.session.user
        }
    }
    else {
        req.params.data = {
            isLoggedIn: false
        }
    }
    next()
}