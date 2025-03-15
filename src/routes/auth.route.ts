import Express from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { verifyTokenMiddleware } from '../middlewares/authMiddleware.js';
const auth = new AuthController();
const router = Express.Router();

// ========================================================

router.post('/login',auth.login.bind(auth));
router.post('/google-login',auth.googleLogin.bind(auth));
router.post('/register',auth.register.bind(auth));
router.post('/logout',auth.logout.bind(auth));
router.get('/google-signin',auth.googleSignIn.bind(auth));
router.get('/check-auth',verifyTokenMiddleware,auth.checkAuthStatus.bind(auth));

export default router;