import { ObjectId } from "mongoose";
import PromptModel from "../mongodb/models/prompt";

export const promptCreate = async (text: string) => {
    const existingPrompt = await PromptModel.findOne({ text });
    if (existingPrompt) return existingPrompt._id;

    const newPrompt = await PromptModel.create({
        patternKey: text,
        message: ""
    });
    return newPrompt._id;
}

export const promptReplaceText = async (id: ObjectId, updated: string) => {
    return PromptModel.findByIdAndUpdate(id, { patternKey: updated }, { new: true });
}
