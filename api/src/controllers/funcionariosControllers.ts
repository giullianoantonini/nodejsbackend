import { Request, Response } from "express";
import conexao from "../services/connection";

const listaFuncionariosDepartamentos = async (req: Request, res: Response) => {
  const [rows] = await conexao.query(
    `SELECT 
    F.nome AS nome_funcionario,
    F.salario,
    F.genero,
    D.nome AS nome_departamento,
    D.sigla AS sigla_departamento
    FROM FUNCIONARIOS AS F 
    INNER JOIN DEPARTAMENTOS AS D 
    ON F.id_departamento = D.id_departamento`
  );
  res.json(rows);
};

export default listaFuncionariosDepartamentos;
