"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Para que a conexão funcione, precisamos de um arquivo precisado ".env" que contenha os dados abaixo.
//Ex.:
//DB_HOST="localhost"
const conexao = promise_1.default.createPool({
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
exports.default = conexao;
//# sourceMappingURL=connection.js.map