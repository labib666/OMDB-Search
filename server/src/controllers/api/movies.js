import axios from 'axios';
import createError from 'http-errors';
import User from '@/models/User';

export const getMovies = async (req, res, next) => {
  const { s } = req.query;
  if (!s) {
    return res.status(200).json({
      message: 'Serched for movie',
      movies: [],
    });
  }

  try {
    const search = await axios.get(`${process.env.OMDB_URI}&s=${s}`);
    return res.status(200).json({
      message: 'Serched for movie',
      movies: search.data.Search.map(e => ({
        id: e.imdbID,
        name: e.Title,
        image: e.Poster,
      })),
    });
  } catch (err) {
    return next(err);
  }
};

export const getMovie = async (req, res, next) => {
  const { id } = req.params;

  try {
    const search = await axios.get(`${process.env.OMDB_URI}&i=${id}`);
    return res.status(200).json({
      message: 'Serched for movie',
      movies: [search.data].map(e => ({
        id: e.imdbID,
        name: e.Title,
        image: e.Poster,
      })),
    });
  } catch (err) {
    return next(err);
  }
};

export const saveMovie = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const { name, image } = req.body;

  try {
    const dbuser = await User.findById(user.id, { password: false }).exec();
    if (!dbuser) {
      return next(createError(404, 'missing user'));
    }
    if (!dbuser.savedMovies) dbuser.savedMovies = [];
    if (!dbuser.savedMovies.find(e => e.id === id)) {
      dbuser.savedMovies.push({ id, name, image });
    }
    await dbuser.save();
    return res.status(200).json({
      message: 'Movie saved',
    });
  } catch (err) {
    return next(err);
  }
};

export const removeMovie = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;

  try {
    const dbuser = await User.findById(user.id, { password: false }).exec();
    if (!dbuser) {
      return next(createError(404, 'missing user'));
    }
    if (!dbuser.savedMovies) dbuser.savedMovies = [];
    if (dbuser.savedMovies.find(e => e.id === id)) {
      const item = dbuser.savedMovies.find(e => e.id === id);
      dbuser.savedMovies.splice(dbuser.savedMovies.indexOf(item), 1);
    }
    await dbuser.save();
    return res.status(200).json({
      message: 'Movie removed',
    });
  } catch (err) {
    return next(err);
  }
};
