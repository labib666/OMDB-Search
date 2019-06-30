import express from 'express';
import { getUser, logout, getUserMovies } from '@/controllers/api/user';

const router = express.Router();

router.get('/', getUser);
router.post('/logout', logout);
router.get('/movies', getUserMovies);

export default router;
