import { Request, Response } from 'express';
import PromptModel from "../mongodb/models/prompt";
import UserModel from '../mongodb/models/user';
import mongoose from 'mongoose';

export const promptCreate = async (req: Request, res: Response) => {
    const { userId, promptText, answerText } = req.body;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            res.status(400).json({ message: "User does not exist" });
            return;
        }
        if (await userHasPromptByText(userId, promptText)) {
            res.status(400).json({ message: "Prompt with this text already exists" });
            return;
        }

        const newPrompt = await PromptModel.create({
            "patternKey": promptText,
            "message": answerText
        });
        user.prompts.push(newPrompt._id);
        user.save();
        res.status(200).json({ "promptId": newPrompt._id });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}

export const promptReplaceText = async (req: Request, res: Response) => {
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
        if (await userHasPromptByText(userId, newText)) {
            res.status(400).json({ message: "Prompt with this text already exists" });
            return;
        }

        const result = PromptModel.updateOne({ "_id": promptId }, { "patternKey": newText });
        res.status(200).json((await result).modifiedCount);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}

export const promptList = async (req: Request, res: Response) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId).populate("prompts");
        if (!user) {
            res.status(400).json({ message: "User does not exist" });
            return;
        }
        res.status(200).json(user.prompts);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}

export const promptDelete = async (req: Request, res: Response) => {
    const { userId, promptId } = req.body;
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

        const result = PromptModel.deleteOne({ "_id": promptId });
        const i = user.prompts.indexOf(promptId);
        user.prompts.splice(i, 1);
        user.save();
        res.status(200).json((await result).deletedCount);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}

export const userHasPromptById = async (userId: string, promptId: mongoose.Types.ObjectId) => {
    const user = await UserModel.findById(userId);
    if (!user) return false;
    for (const id of user.prompts) {
        if (id == promptId) return true;
    }
    return false;
}

const userHasPromptByText = async (userId: string, promptText: string) => {
    const user = await UserModel.findById(userId);
    if (!user) return false;
    for (const promptId of user.prompts) {
        const promptObj = await PromptModel.findById(promptId);
        if (promptObj?.patternKey.localeCompare(promptText) == 0) {
            return true;
        }
    }
    return false;
}

export const promptGetAnswer = async (req: Request, res: Response) => {
    const userId = req.query.userId as string;
    const promptText = req.query.promptText as string;
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            res.status(400).json({ message: "User does not exist" });
            return;
        }
        for (const promptId of user.prompts) {
            const promptObj = await PromptModel.findById(promptId);
            if (promptObj?.patternKey.localeCompare(promptText) == 0) {
                res.status(200).json(promptObj.message);
                return;
            }
        }
        res.status(400).json({ message: "Prompt does not exist" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "unknown" });
        }
    }
}
