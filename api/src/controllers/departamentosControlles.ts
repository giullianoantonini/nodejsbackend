import { Request, Response } from "express";
import conexao from "../services/connection";

export const listaDepartamentos = async (req: Request, res: Response) => {
  // Executar uma query com o banco
  const [rows] = await conexao.query("SELECT * FROM DEPARTAMENTOS");

  res.json(rows);
};

//TO DO
// PRECISAMOS VALIDAR QUE A APP NÃO QUEBRE SE OS DADOS VIEREM REPETIDOS
// PRECISAMOS VALIDAR QUE OS DADOS ESTÃO SENDO ENVIADOS (NOME E SIGLA OBRIGATÓRIOS)

export const insereDepartamentos = async (req: Request, res: Response) => {
  const { nome, sigla } = req.body;

  try {
    const [result] = await conexao.execute(
      "INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)",
      [sigla, nome]
    );

    res.status(201).json({
      message: "Departamento criado",
    });
  } catch (e) {
    res.status(500).json({
      message: "Erro na criação",
    });
  }
};

export const deletaDepartamentos = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const [result] = await conexao.execute(
      "DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?",
      [id]
    );
    if ("affectedRows" in result) {
      if (result.affectedRows === 0) {
        res.status(404).json({
          message: "Departamento não encontrado",
        });
      } else {
        res.sendStatus(204);
      }
    } else {
      res.status(500).json({
        message: "Erro na exclusão do departamento",
      });
    }
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ message: "Erro na exclusão do departamento", error: e.message });
  }
};
