import { Router, Request, Response } from 'express';
import { promptCreate } from '../controllers/prompt.controller';

const router = Router();

router.post('/create/v1', (req: Request, res: Response) => {
    const { promptText } = req.body;
    const promptId = promptCreate(promptText);
    return res.status(200).json(promptId);
});

export default router;
