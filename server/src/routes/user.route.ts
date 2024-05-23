import { Router } from 'express';
import { userCreate, userDelete, userGet } from '../controllers/user.controller'

const router = Router();

router.route('/create/v1').post(userCreate);
router.route('/delete/v1').delete(userDelete);
router.route('/get/:id').get(userGet);

export default router;
