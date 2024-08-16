import { Router } from "express";
import rootResponse from "../controllers/defaultControllers";

const router = Router();

router.get("/", rootResponse);

export default router;
