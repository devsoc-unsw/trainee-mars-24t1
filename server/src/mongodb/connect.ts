import mongoose from 'mongoose';

const connectDB = (url: string): void => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((error: Error) => console.log(error));
}

export default connectDB;
