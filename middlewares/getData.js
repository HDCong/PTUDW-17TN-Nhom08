module.exports = function (req, res, next) {
      res.locals.username = req.session.user ? req.session.user.username : '';
      res.locals.isLoggedIn = req.session.user ? true : false;

      next()
}