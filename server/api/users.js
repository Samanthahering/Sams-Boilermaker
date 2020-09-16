const router = require('express').Router();

router.get('/', (req, res, next) => {
    try {
        res.json('Hello this is your route! Good job girl :) <3')
        
    } catch (error) {
        next(error)  
    }
})



module.exports = router;