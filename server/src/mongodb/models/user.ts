import mongoose, { Schema, Document, Model } from 'mongoose';

// Define an interface for the User document
interface IUser extends Document {
  email: string;
  prompts: mongoose.Types.ObjectId[];
}

// Define the User schema
const userSchema: Schema = new mongoose.Schema({
  email: { type: String, required: true },
  prompts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prompt" }],
});

// Create the model
const UserModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default UserModel;
