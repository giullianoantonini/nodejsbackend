import { Router } from "express";
import {
  insereDepartamentos,
  listaDepartamentos,
  deletaDepartamentos,
} from "../controllers/departamentosControlles";

const router = Router();

router.get("/departamentos", listaDepartamentos);

router.post("/departamentos", insereDepartamentos);

router.delete("/departamentos/:id", (req, res) => {
  const { id } = req.params;
  if (isNaN(parseInt(id))) {
    res.status(400).json({ message: "ID inválido" });
  } else {
    deletaDepartamentos(req, res);
  }
});

export default router;
