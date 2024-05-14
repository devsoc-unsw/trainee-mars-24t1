import UserModel from "../mongodb/models/user";
import { Request, Response } from "express";

// creates a user if the id doesnt exist already
export const userCreate = async (email: string) => {
    const userFound = await UserModel.findOne({email});

    if (userFound) throw new Error("User already exists!");

    const newUser = await UserModel.create({
        email
    })

    return newUser._id;
}


// delete user
export const userDelete = async (email: string) => {
    const userFound = await UserModel.findOne({email});

    if (!userFound) throw new Error("User not found!");

    await UserModel.deleteOne({email});

    return {}

}

// get user email 
export const userGet = async (id: number) => {
    const userFound = await UserModel.findOne({_id: id}).populate("allProperties");

    if (!userFound) throw new Error("User not found!");

    return userFound.email;

}