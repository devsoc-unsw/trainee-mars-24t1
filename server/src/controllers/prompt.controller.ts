import { Request, Response } from 'express';
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

    res.status(200).json({ "promptId": newPrompt._id });
}

export const promptReplaceText = async (req: Request, res: Response) => {
    const { promptId, newText } = req.body;
    const existingPrompt = await PromptModel.findOne({ "_id": promptId });
    if (!existingPrompt) {
        res.status(500).json({ message: "Prompt does not exist" });
        return;
    }
    const matchingPrompt = await PromptModel.findOne({ "patternKey": newText });
    if (matchingPrompt) {
        res.status(500).json({ message: "Prompt with this text already exists" });
        return;
    }

    const result = PromptModel.updateOne({ "_id": promptId }, { "patternKey": newText });
    res.status(200).json((await result).modifiedCount);
}
