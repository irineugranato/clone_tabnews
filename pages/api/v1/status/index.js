import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query('select 1 + 3;');
  console.log(result.rows);
  response.status(200).json({chave: "Resposta da API do curso .dev ok"});
};
export default status;
