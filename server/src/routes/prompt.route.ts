import { Router } from 'express';
import { promptCreate, promptReplaceText } from '../controllers/prompt.controller';

const router = Router();

router.route('/create/v1').post(promptCreate);
router.route('/edit/v1').put(promptReplaceText);

export default router;
