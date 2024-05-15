import { Router, Request, Response } from 'express';
import { promptCreate, promptReplaceText } from '../controllers/prompt.controller';

const router = Router();

router.route('/create/v1').post(promptCreate);

router.put('/edit/v1', (req: Request, res: Response) => {
    const { promptId, newText } = req.body;
    const result = promptReplaceText(promptId, newText);
    if (result == null) return res.status(500).json({ message: "Prompt does not exist" });
    return res.status(200);
});

export default router;
