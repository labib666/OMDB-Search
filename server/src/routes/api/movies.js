import express from 'express';
import {
  getMovies, getMovie, saveMovie, removeMovie,
} from '@/controllers/api/movies';

const router = express.Router();

router.get('/:id', getMovie);
router.put('/:id', saveMovie);
router.delete('/:id', removeMovie);
router.get('/', getMovies);

export default router;
