import { Router } from "express";
import {
  insereDepartamentos,
  listaDepartamentos,
  deletaDepartamentos,
} from "../controllers/departamentosControlles";

const router = Router();

router.get("/departamentos", listaDepartamentos);

router.post("/departamentos", insereDepartamentos);

router.delete("/departamentos/", deletaDepartamentos);

export default router;
