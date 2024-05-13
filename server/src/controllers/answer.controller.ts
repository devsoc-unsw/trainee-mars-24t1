import { ObjectId } from "mongoose";
import PromptModel from "../mongodb/models/prompt";

export function answerReplaceText(id: ObjectId, text: string) {
    return PromptModel.findByIdAndUpdate(id, { message: text }, { new: true });
}
