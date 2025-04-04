import { UserService } from '../services/UserService.js';
import express from 'express';

// import { verifyTokenMiddleware } from '../middlewares/authMiddleware.js';

const userRouter = express.Router();
const userService = new UserService();

// Protected route to get the current user's profile
userRouter.get('/me', 
  async (req, res, next) => {
  try {
    const user = await userService.getUserById((req as any).user.userId); // req.user is set by the middleware
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Public route to get user by username
userRouter.get('/user/:username', async (req, res, next) => {
  try {
    const user = await userService.getUserByUsername(req.params.username);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
    // console.log(user);
  } catch (error) {
    next(error);
  }
});

userRouter.get('/users', async (req, res, next) => {
  try {
    const role = req.query.role as string;
    const users = await userService.getUsersByRole(role);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

export default userRouter;
