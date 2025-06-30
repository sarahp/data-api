import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';

const router = express.Router();

// GET /api/users — all users
router.get('/', getAllUsers);

// GET /api/users/:id — a specific user by ID
router.get('/:id', getUserById);

export default router;
