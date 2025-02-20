// enquanto não utilizo um banco de dados externo o array de http status code será salvo aqui;
const statusCodes = [
    {
      "status": 100,
      "legenda": "Continue",
      "descrição": "Indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado.",
      "imagem": "status100"
    },
    {
      "status": 101,
      "legenda": "Switching Protocols",
      "descrição": "O servidor aceita mudar o protocolo de comunicação conforme solicitado.",
      "imagem": "status101"
    },
    {
      "status": 103,
      "legenda": "Early Hints",
      "descrição": "É destinado principalmente a ser usado com o cabeçalho Link para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.",
      "imagem": "status103"
    },
    // {
    //   "status": 201,
    //   "legenda": "Created",
    //   "descrição": "A solicitação foi bem-sucedida e um novo recurso foi criado.",
    //   "imagem": ""
    // },
    // {
    //   "status": 202,
    //   "legenda": "Accepted",
    //   "descrição": "A solicitação foi recebida, mas ainda não foi processada.",
    //   "imagem": ""
    // },
    // {
    //   "status": 204,
    //   "legenda": "No Content",
    //   "descrição": "A solicitação foi bem-sucedida, mas não há conteúdo para retornar.",
    //   "imagem": ""
    // },
    // {
    //   "status": 301,
    //   "legenda": "Moved Permanently",
    //   "descrição": "O recurso solicitado foi movido permanentemente para outro local.",
    //   "imagem": ""
    // },
    // {
    //   "status": 302,
    //   "legenda": "Found",
    //   "descrição": "O recurso solicitado foi temporariamente movido para outro local.",
    //   "imagem": ""
    // },
    // {
    //   "status": 400,
    //   "legenda": "Bad Request",
    //   "descrição": "O servidor não pode ou não processa a solicitação devido a erro do cliente.",
    //   "imagem": ""
    // },
    // {
    //   "status": 401,
    //   "legenda": "Unauthorized",
    //   "descrição": "A solicitação requer autenticação de usuário.",
    //   "imagem": ""
    // },
    // {
    //   "status": 403,
    //   "legenda": "Forbidden",
    //   "descrição": "O servidor entendeu a solicitação, mas se recusa a autorizá-la.",
    //   "imagem": ""
    // },
    // {
    //   "status": 404,
    //   "legenda": "Not Found",
    //   "descrição": "O servidor não conseguiu encontrar o recurso solicitado.",
    //   "imagem": ""
    // },
    // {
    //   "status": 405,
    //   "legenda": "Method Not Allowed",
    //   "descrição": "O método especificado na solicitação não é permitido para o recurso solicitado.",
    //   "imagem": ""
    // },
    // {
    //   "status": 500,
    //   "legenda": "Internal Server Error",
    //   "descrição": "O servidor encontrou um erro inesperado ao tentar processar a solicitação.",
    //   "imagem": ""
    // },
    // {
    //   "status": 502,
    //   "legenda": "Bad Gateway",
    //   "descrição": "O servidor recebeu uma resposta inválida de um servidor upstream ao tentar atender à solicitação.",
    //   "imagem": ""
    // },
    // {
    //   "status": 503,
    //   "legenda": "Service Unavailable",
    //   "descrição": "O servidor não está disponível no momento, geralmente devido a manutenção.",
    //   "imagem": ""
    // },
    // {
    //   "status": 504,
    //   "legenda": "Gateway Timeout",
    //   "descrição": "O servidor não recebeu uma resposta a tempo de um servidor upstream.",
    //   "imagem": ""
    // }
  ];
  
  export default statusCodes;
  