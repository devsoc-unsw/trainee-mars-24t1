import { Router, Request, Response } from 'express';

const router = Router();

// Add your CRUD API implementation here
router.get('/', (req: Request, res: Response) => {
    res.json("echo");
});

export default router;