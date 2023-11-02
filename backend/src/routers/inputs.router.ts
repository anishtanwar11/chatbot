import { Router } from "express";
import asyncHandler from 'express-async-handler';
import { UserInput, UserModel } from "../models/inputs.model";

const router = Router();

router.get('/getinput', asyncHandler(
    async (req, res) =>{
        const users = await UserModel.find();
        res.send(users);
    }
))

router.post('/enterinput', asyncHandler(
    async (req, res) =>{
        const {input} = req.body

        const newInput: UserInput = {
            input
        }

        const dbUser = await UserModel.create(newInput);
    }
))

export default router;