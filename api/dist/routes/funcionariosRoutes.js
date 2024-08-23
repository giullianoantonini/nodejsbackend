"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funcionariosControllers_1 = __importDefault(require("../controllers/funcionariosControllers"));
const router = (0, express_1.Router)();
router.get("/funcionarios/departamentos", funcionariosControllers_1.default);
exports.default = funcionariosControllers_1.default;
//# sourceMappingURL=funcionariosRoutes.js.map