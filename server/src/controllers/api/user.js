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

export const logout = (req, res) => res.status(200).json({
  message: 'Logout Successful',
});
