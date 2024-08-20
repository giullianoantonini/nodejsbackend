"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentosControlles_1 = require("../controllers/departamentosControlles");
const router = (0, express_1.Router)();
router.get("/departamentos", departamentosControlles_1.listaDepartamentos);
router.post("/departamentos", departamentosControlles_1.insereDepartamentos);
router.delete("/departamentos/", departamentosControlles_1.deletaDepartamentos);
exports.default = router;
//# sourceMappingURL=departamentosRoutes.js.map