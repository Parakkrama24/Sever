import express from 'express';
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from '../controllers/usercontroller.js';
import { admin, protect, isadmin } from '../middleware/authMiddleware.js';


  const router = express.Router();
 
  router.route('/').post(registerUser).get(protect, admin, getUsers);
  router.post('/auth',  authUser);
  router.post('/adminAuth', isadmin,  authUser);
  router.post('/logout', logoutUser);
  router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

  router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);
  
  
  export default router;