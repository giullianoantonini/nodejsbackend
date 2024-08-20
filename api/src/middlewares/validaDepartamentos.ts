import { Request, Response, NextFunction } from "express";

const validaDepartamentos = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { nome, sigla } = req.body;
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

export default validaDepartamentos;
