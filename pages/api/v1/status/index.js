import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT 3 + 3 as soma;');
  console.log(result);
  response.status(200).json({chave: "Resposta da API do curso .dev ok"});
};
export default status;
