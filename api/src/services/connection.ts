import mysql from "mysql2/promise";

const conexao = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "EMPRESA",
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
