const { Router } = require("express")
const { userController } = require("../controllers")

const userRouter = new Router({mergeParams:true});
userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)

userRouter.post('/logout')
module.exports = userRouter