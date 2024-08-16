import express, { Request, Response } from "express";
import defaultRoutes from "./routes/defaultRoutes";
import departamentosRoutes from "./routes/departamentosRoutes";

const porta = 3030;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(defaultRoutes);
app.use(departamentosRoutes);

app.listen(porta, () =>
  console.log(`Servidor escutando na porta http://localhost:${porta}`)
);
