import { Request, Response } from 'express';
import PromptModel from "../mongodb/models/prompt";

export const answerReplaceText = async (req: Request, res: Response) => {
    const { promptId, newText } = req.body;
    const existingPrompt = await PromptModel.findOne({ "_id": promptId });
    if (!existingPrompt) {
        res.status(500).json({ message: "Prompt does not exist" });
        return;
    }
    const result = PromptModel.updateOne({ "_id": promptId }, { "message": newText });
    res.status(200).json((await result).modifiedCount);
}
