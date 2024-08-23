"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const defaultRoutes_1 = __importDefault(require("./routes/defaultRoutes"));
const departamentosRoutes_1 = __importDefault(require("./routes/departamentosRoutes"));
const funcionariosRoutes_1 = __importDefault(require("./routes/funcionariosRoutes"));
const porta = 3030;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(defaultRoutes_1.default);
app.use(departamentosRoutes_1.default);
app.use(funcionariosRoutes_1.default);
app.listen(porta, () => console.log(`Servidor escutando na porta http://localhost:${porta}`));
//# sourceMappingURL=index.js.map