import { Router } from 'express';
import { userCreate, userDelete, userGet } from '../contollers/user.controller'

const router = Router();

router.post('/create/v1', userCreate);

router.delete('/delete/v1', userDelete);

router.get('/get/:id', userGet);
