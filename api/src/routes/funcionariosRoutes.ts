import { Router } from "express";
import listaFuncionariosDepartamentos from "../controllers/funcionariosControllers";

const router = Router();

router.get("/funcionarios/departamentos", listaFuncionariosDepartamentos);

export default listaFuncionariosDepartamentos;
