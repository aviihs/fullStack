const { Router } = require('express');
const authController = require("../controllers/auth.controllers")

const authRouter = Router();

/** 
   * @route POST /api/auth/register
   * @desc Register a new user
   * @access Public
   */


authRouter.post('/register', authController.registerUserController)

/** 
   * @route POST /api/auth/login
   * @desc Login User with Email and password
   * @access Public
   */

authRouter.post('/login', authController.loginUserController)


/** 
   * @route GET /api/auth/logout
   * @desc clear token from user cookie and add token in the blacklist
   * @access Public
   */

authRouter.get('/logout', authController.logoutUserController)



module.exports = authRouter;