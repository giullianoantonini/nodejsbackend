"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizaDepartamentos = exports.deletaDepartamentos = exports.insereDepartamentos = exports.listaDepartamentos = void 0;
const connection_1 = __importDefault(require("../services/connection"));
const listaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Executar uma query com o banco
    const [rows] = yield connection_1.default.query("SELECT * FROM DEPARTAMENTOS");
    res.json(rows);
});
exports.listaDepartamentos = listaDepartamentos;
//TO DO
// PRECISAMOS VALIDAR QUE A APP NÃO QUEBRE SE OS DADOS VIEREM REPETIDOS
// PRECISAMOS VALIDAR QUE OS DADOS ESTÃO SENDO ENVIADOS (NOME E SIGLA OBRIGATÓRIOS)
const insereDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, sigla } = req.body;
    try {
        const [result] = yield connection_1.default.execute("INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (? , ?)", [sigla, nome]);
        res.status(201).json({
            message: "Departamento criado",
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Erro na criação",
        });
    }
});
exports.insereDepartamentos = insereDepartamentos;
const deletaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const [result] = yield connection_1.default.execute("DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?", [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({
                message: "Departamento não encontrado",
                id,
            });
            return;
        }
        else {
            res.json({
                message: "Departamento excluído",
                id,
            });
            return;
        }
    }
    catch (e) {
        console.log(e);
        let message = "";
        switch (e.code) {
            case "ER_ROW_IS_REFERENCED_2":
                message = "Departamento possui vinculos e não pode ser excluído";
                break;
            default:
                message = "Erro na exclusão do departamento";
                break;
        }
        res.status(500).json({
            message,
        });
    }
});
exports.deletaDepartamentos = deletaDepartamentos;
const atualizaDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, sigla } = req.body;
    try {
        const [result] = yield connection_1.default.execute("UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?", [nome, sigla, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({
                message: "Departamento não encontrado",
                id,
            });
            return;
        }
        res.json({
            message: "Departamento atualizado",
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Erro ao atualizar o departamento",
        });
    }
});
exports.atualizaDepartamentos = atualizaDepartamentos;
//# sourceMappingURL=departamentosControlles.js.map