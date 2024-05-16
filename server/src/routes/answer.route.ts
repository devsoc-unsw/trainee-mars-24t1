import { Router } from 'express';
import { answerReplaceText } from '../controllers/answer.controller';

const router = Router();

router.route('/edit/v1').put(answerReplaceText);

export default router;
