import mongoose, { Schema, Document, Model } from 'mongoose';

interface IPrompt extends Document {
  patternKey: string;
  message: string;
}

const promptSchema: Schema = new mongoose.Schema({
  patternKey: { type: String, required: true },
  message: { type: String, required: true },
});

const PromptModel: Model<IPrompt> = mongoose.model<IPrompt>('Prompt', promptSchema);

export default PromptModel;
