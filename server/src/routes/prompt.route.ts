import { Router } from 'express';
import { promptCreate, promptReplaceText, promptDelete } from '../controllers/prompt.controller';

const router = Router();

router.route('/create/v1').post(promptCreate);
router.route('/edit/v1').put(promptReplaceText);
router.route('/delete/v1').delete(promptDelete);

export default router;
