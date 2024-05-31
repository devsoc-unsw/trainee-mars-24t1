import { Router } from 'express';
import { promptCreate, promptReplaceText, promptList, promptDelete, promptGetAnswer } from '../controllers/prompt.controller';

const router = Router();

router.route('/create/v1').post(promptCreate);
router.route('/edit/v1').put(promptReplaceText);
router.route('/list/v1').get(promptList);
router.route('/delete/v1').delete(promptDelete);
router.route('/get/v1').get(promptGetAnswer);

export default router;
