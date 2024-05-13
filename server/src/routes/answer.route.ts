import { Router, Request, Response } from 'express';
import { answerReplaceText } from '../controllers/answer.controller';

const router = Router();

router.put('/edit/v1', (req: Request, res: Response) => {
    const { promptId, newText } = req.body;
    answerReplaceText(promptId, newText);
    return res.status(200).json();
});

export default router;
