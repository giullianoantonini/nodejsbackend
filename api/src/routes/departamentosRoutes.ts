import { Router } from "express";
import {
  insereDepartamentos,
  listaDepartamentos,
} from "../controllers/departamentosControlles";

const router = Router();

router.get("/departamentos", listaDepartamentos);

router.post("/departamentos", insereDepartamentos);

export default router;
