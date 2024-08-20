import { Router } from "express";
import {
  insereDepartamentos,
  listaDepartamentos,
  deletaDepartamentos,
} from "../controllers/departamentosControlles";

import validaDepartamentos from "../middlewares/validaDepartamentos";

const router = Router();

router.get("/departamentos", listaDepartamentos);

router.post("/departamentos", validaDepartamentos, insereDepartamentos);

router.delete("/departamentos/", deletaDepartamentos);

export default router;
