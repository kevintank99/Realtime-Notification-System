const router = new require('express').Router({mergeParams: true})
const userRouter = require('./user.routes')
// const followe

router.use('/user', userRouter)
module.exports = router
