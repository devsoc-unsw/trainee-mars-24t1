import { Request, Response } from 'express';
import { ObjectId } from "mongoose";
import PromptModel from "../mongodb/models/prompt";

export const promptCreate = async (req: Request, res: Response) => {
    const { promptText, answerText } = req.body;
    const existingPrompt = await PromptModel.findOne({ "patternKey": promptText });
    if (existingPrompt) {
        res.status(500).json({ message: "Prompt already exists" });
        return;
    }

    const newPrompt = await PromptModel.create({
        "patternKey": promptText,
        "message": answerText
    });

    res.status(200).json({"promptId": newPrompt._id});
}

export const promptReplaceText = async (id: ObjectId, updated: string) => {
    return PromptModel.findByIdAndUpdate(id, { patternKey: updated }, { new: true });
}
