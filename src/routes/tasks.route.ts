import CleaningTaskModel from '../models/CleaningTask.model.js';
import express from 'express';

const router = express.Router();

router.get('/tasks', async (req, res, next) => {
  try {
    const tasks = await CleaningTaskModel.find({});
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

export default router;
