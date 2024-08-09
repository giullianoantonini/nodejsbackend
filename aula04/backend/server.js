import http from "http";

const PORTA = 3000;
const SERVER = "localhost";

const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.url === "/clientes") {
    res.end("Página de clientes");
    return;
  }
  if (req.url === "/contato") {
    res.end("Página de contato");
    return;
  }

  if (req.url === "/cadastro" && req.method === "POST") {
    res.end("Cadastro efetuado com sucesso!");
    return;
  }

  res.end("Rodando...");
});

server.listen(PORTA, SERVER, () => {
  console.log(`Servidor operando em: ${SERVER}:${PORTA}`);
});
