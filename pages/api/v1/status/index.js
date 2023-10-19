function status(request, response) {
  response.status(200).json({chave: "Resposta da API do curso .dev ok",
  marca: "BMW",
  modelo:"ActiveFlex"

});
}
export default status;
