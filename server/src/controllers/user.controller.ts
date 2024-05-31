import UserModel from "../mongodb/models/user";
import { Request, Response } from "express";

// creates a user if the id doesnt exist already
export const userCreate = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const userFound = await UserModel.findOne({ "email": email });

        if (userFound) {
            return res.status(200).json({ userId: userFound._id, email: userFound.email });
        }

        const newUser = await UserModel.create({
            email
        });

        res.status(200).json({ userId: newUser._id, email: newUser.email });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// delete user
export const userDelete = async (req: Request, res: Response) => {
    const { email } = req.body;
    
    try {
        const userFound = await UserModel.findOne({ "email": email });

        if (!userFound) throw new Error("User not found!");

        await UserModel.deleteOne({ email });

        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ message: "User doesnt exists" });
    }

}

// get user email 
export const userGet = async (req: Request, res: Response) => {

    try {
        const id = parseInt(req.params.id);

        const userFound = await UserModel.findOne({ "_id": id }).populate("allProperties");

        if (!userFound) throw new Error("User not found!");

        res.status(200).json({ email: userFound.email })
    } catch (error) {
        res.status(500).json({ message: "User doesnt exists" });
    }

}
