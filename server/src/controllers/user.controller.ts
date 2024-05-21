import UserModel from "../mongodb/models/user";
import { Request, Response } from "express";

// creates a user if the id doesnt exist already
export const userCreate = async (req: Request, res: Response) => {
    const { email } = req.body;
    
    try {
        const userFound = await UserModel.findOne({"email": email});

        console.log(userFound)

        if (userFound) return res.status(200).json(userFound._id)

        const newUser = await UserModel.create({
            email
        })

        res.status(200).json(newUser._id)
    } catch (error) {
        res.status(500).json({message: "unknown"});
    }

}

// delete user
export const userDelete = async (req: Request, res: Response) => {
    const email = req.body;
    
    try {
        const userFound = await UserModel.findOne({email});

        if (!userFound) throw new Error("User not found!");

        await UserModel.deleteOne({email});

        res.status(200).json({})
    } catch (error) {
        res.status(500).json({message: "User doesnt exists"});
    }

}

// get user email 
export const userGet = async (req: Request, res: Response) => {

    try {
        const id = parseInt(req.params.id);

        const userFound = await UserModel.findOne({_id: id}).populate("allProperties");

        if (!userFound) throw new Error("User not found!");

        res.status(200).json(userFound.email)
    } catch (error) {
        res.status(500).json({message: "User doesnt exists"});
    }

}
