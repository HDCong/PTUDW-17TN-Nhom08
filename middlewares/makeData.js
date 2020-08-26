module.exports = function (req, res, next) {
    if (res.locals.isLoggedIn) {
        req.params.data = {
            isLoggedIn: true,
            username: res.locals.username
        }
    }
    else {
        req.params.data = {
            isLoggedIn: false
        }
    }
    next()
}