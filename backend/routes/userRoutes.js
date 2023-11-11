import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserByID, updateUser, deleteUser } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/')
    .post(registerUser)
    .get(protect, admin, getUsers)

router.post('/auth', authUser);

router.post('/logout', logoutUser);

router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router.route('/:id')
    .get(protect, admin, getUserByID)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser)

export default router;