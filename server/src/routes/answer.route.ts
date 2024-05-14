import { Router, Request, Response } from 'express';
import { answerReplaceText } from '../controllers/answer.controller';

const router = Router();

router.put('/edit/v1', (req: Request, res: Response) => {
    const { promptId, newText } = req.body;
    const result = answerReplaceText(promptId, newText);
    if (result == null) return res.status(500).json({ message: "Prompt does not exist" });
    return res.status(200).json();
});

export default router;
