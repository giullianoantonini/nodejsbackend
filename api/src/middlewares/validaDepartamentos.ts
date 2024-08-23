import { Request, Response, NextFunction } from "express";

const validaDepartamentos = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { nome, sigla } = req.body;
  const { id } = req.params;

  if (req.method == "PUT" && isNaN(Number(id))) {
    res.status(400).json({
      message: "Identificador deve ser numérico",
    });
    return;
  }

  if (
    typeof nome !== "string" ||
    nome.trim() === "" ||
    typeof sigla !== "string" ||
    sigla.trim() === ""
  ) {
    res.status(400).json({
      message: "Campo inválido ou ausente",
    });
  } else {
    next();
  }
};

//TO DO: Implemente um validador para os parametros vindos na atualização de um departamento
// DESAFIO: o ideal é que você use a mesma função validaDepartamento da inserção, porém faça ele suportar também a validação do ID

export default validaDepartamentos;
