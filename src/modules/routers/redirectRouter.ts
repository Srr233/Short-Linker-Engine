import { Request, Response, Router } from "express";
import { getLink } from "../mongoose";

const router = Router();

router.use(async (req: Request, res: Response) => {
    const path = req.originalUrl;
    const shortPartOfLink = path.slice(1);

    const originalLink = await getLink(shortPartOfLink);

    if (originalLink) {
        res.redirect(originalLink);
    } else {
        res.sendStatus(404);
    }

});

router.get('/', (_, res) => res.sendStatus(200));

export default router;
