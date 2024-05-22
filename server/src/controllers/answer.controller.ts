import { Request, Response } from 'express';
import PromptModel from "../mongodb/models/prompt";
import UserModel from "../mongodb/models/user";
import { userHasPromptById } from './prompt.controller';

export const answerReplaceText = async (req: Request, res: Response) => {
    const { userId, promptId, newText } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            res.status(400).json({ message: "User does not exist" });
            return;
        }
        if (!(await userHasPromptById(userId, promptId))) {
            res.status(400).json({ message: "Prompt does not exist" });
            return;
        }
        const result = PromptModel.updateOne({ "_id": promptId }, { "message": newText });
        res.status(200).json((await result).modifiedCount);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}
