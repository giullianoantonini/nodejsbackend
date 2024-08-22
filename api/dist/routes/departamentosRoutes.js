"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosControlles_1 = require("../controllers/departamentosControlles");
const validaDepartamentos_1 = __importDefault(require("../middlewares/validaDepartamentos"));
const router = (0, express_1.Router)();
router.get("/departamentos", departamentosControlles_1.listaDepartamentos);
router.post("/departamentos", validaDepartamentos_1.default, departamentosControlles_1.insereDepartamentos);
router.delete("/departamentos/", departamentosControlles_1.deletaDepartamentos);
router.put("/departamentos/:id", departamentosControlles_1.atualizaDepartamentos);
exports.default = router;
//# sourceMappingURL=departamentosRoutes.js.map