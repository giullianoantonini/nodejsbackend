import express, { Request, Response } from "express";
import defaultRoutes from "./routes/defaultRoutes";
import departamentosRoutes from "./routes/departamentosRoutes";
import funcionariosRoutes from "./routes/funcionariosRoutes";
import cors from "cors";

const porta = 3030;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(defaultRoutes);
app.use(departamentosRoutes);
app.use(funcionariosRoutes);

app.listen(porta, () =>
  console.log(`Servidor escutando na porta http://localhost:${porta}`)
);
