import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

//Para que a conexão funcione, precisamos de um arquivo precisado ".env" que contenha os dados abaixo.
//Ex.:
//DB_HOST="localhost"
const conexao = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

conexao
  .getConnection()
  .then((connection) => {
    console.log("Conectado a base de dados.j");
    connection.release();
  })
  .catch((err) => {
    switch (err.code) {
      case "ENOTFOUND":
        console.error("[ERROR] Host inválido");
        break;
      case "ER_BAD_DB_ERROR":
        console.error("[ERROR] Base de dados não existe");
        break;
      case "ER_ACCESS_DENIED_ERROR":
        console.error("[ERROR] Erro de autenticação");
        break;
      default:
        console.error("[ERROR]", err);
        break;
    }
  });

export default conexao;
