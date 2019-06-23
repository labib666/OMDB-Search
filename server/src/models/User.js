import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  savedMovies: [String],
});

model('User', UserSchema, 'users');
export default model('User');
