import express from 'express';
import { registerController, loginController, testController } from '../controllers/authController.js'
import { isAdmin, requiredSignIn } from '../middlewares/authMiddleware.js';
//router object
const router = express.Router()

//REGISTER || POST
router.post('/register',registerController)

//LOGIN || POST
router.post('/login',loginController)

//test routes
router.get('/test', requiredSignIn, isAdmin, testController)







export default router;