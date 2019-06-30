import User from '../../models/User';

export const getUser = (req, res) => {
  const { user } = req;
  return res.status(200).json({
    message: 'Hello user',
    user: {
      id: user.id,
      username: user.username,
    },
  });
};

export const getUserMovies = async (req, res, next) => {
  const { user } = req;
  try {
    const userDetail = await User.findById(user.id, { moviesSaved: true }).exec();
    if (!userDetail) {
      return next(Error('missing user'));
    }
    return res.status(200).json({
      message: 'retrieved user movies',
      movies: userDetail.moviesSaved || [],
    });
  } catch (err) {
    return next(err);
  }
};

export const logout = (req, res) => res.status(200).json({
  message: 'Logout Successful',
});
