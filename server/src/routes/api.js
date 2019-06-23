import express from 'express';
import { authenticate } from '@/utils/passport';
import user from './api/user';
import movies from './api/movies';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello from the API',
}));

router.use(authenticate());

router.use('/user', user);
router.use('/movies', movies);

export default router;
