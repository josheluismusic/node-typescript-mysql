import { Router, Request, Response } from "express";

const router = Router();

router.get('/heroes/:id', (req : Request, res: Response) => {
    
    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Todo ok en server',
        id
    });
});

export default router;