import mongoose from 'mongoose';

export interface IUser {
  _id: string;
  email: string;
  name: string;
  role: string;
  password: string;
  address: string;
  age: number;
  gender: string;
  company: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  };
}
