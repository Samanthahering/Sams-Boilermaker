const router = require('express').Router();

router.use('/users', require('./users'))

//error handler (if a user types in a route that doesn't exist)
router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  })


module.exports = router;