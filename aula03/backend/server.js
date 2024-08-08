import http from "http";

const server = http.createServer((req, res) => {
  //const total = 100 + 2 + 5 + (3 / 25) * 2;
  //res.end(`O total foi: ${total}`);

  // Realize a soma de dois números
  // se o resultado da soma for PAR
  // mostre o NÚMERO com a mensagem PAR ao lado
  // caso contrário, informe NUMERO e a mensagem IMPAR ao lado

  const soma = 1 + 1;

  if (soma % 2 === 0) {
    return res.end(`${soma} PAR`);
  } else {
    return res.end(`${soma} IMPAR`);
  }
});

server.listen(3000, "localhost");
