"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validaDepartamentos = (req, res, next) => {
    const { nome, sigla } = req.body;
    if (typeof nome !== "string" ||
        nome.trim() === "" ||
        typeof sigla !== "string" ||
        sigla.trim() === "") {
        res.status(400).json({
            message: "Campo inválido ou ausente",
        });
    }
    else {
        next();
    }
};
exports.default = validaDepartamentos;
//# sourceMappingURL=validaDepartamentos.js.map