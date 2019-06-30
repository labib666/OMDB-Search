import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  savedMovies: [{
    id: String,
    name: String,
    image: String,
  }],
});

model('User', UserSchema, 'users');
export default model('User');
