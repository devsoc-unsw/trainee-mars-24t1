import { Router, Request, Response } from 'express';
import { userCreate, userDelete, userGet } from '../contollers/user.controller'

const router = Router();

router.post('/user', (req: Request, res: Response) => {
    const email = req.body;

    try {
        const userId = userCreate(email);

        res.status(200).json(userId)
    } catch (error) {
        res.status(500).json({message: "User already exists"});
    }

});

router.delete('/user', (req: Request, res: Response) => {
    const email = req.body;

    try {
        const userId = userDelete(email);

        res.status(200).json(userId)
    } catch (error) {
        res.status(500).json({message: "User doesnt exists"});
    }

});


router.get('/user/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        const userId = userGet(id);

        res.status(200).json(userId)
    } catch (error) {
        res.status(500).json({message: "User doesnt exists"});
    }

});
