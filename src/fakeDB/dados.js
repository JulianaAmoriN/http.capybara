const statusCodes = [
  {
    "status": 100,
    "legenda": "Continue",
    "imagem": "status100",
    "descricao": "Indica que até o momento tudo está OK e que o cliente pode continuar com a requisição ou ignorar caso já tenha terminado. Para ter uma verificação pelo servidor o cliente deve enviar o header Expect: 100-continue na requisição inicial e receber o status 100 Continue antes de enviar o body da requisição.",
  },
  {
    "status": 101,
    "legenda": "Switching Protocols",
    "imagem": "status101",
    "descricao": " indica para qual protocolo o servidor está trocando, conforme solicitado por um cliente que tenha enviado uma mensagem incluindo Upgrade no cabeçalho da requisição. O servidor inclui Upgrade no seu cabeçalho de resposta para indicar para qual protocolo o cliente foi redirecionado.",
    "adicional": "Presume-se que o servidor só concordará em alternar protocolos quando for vantajoso fazê-lo. Por exemplo, mudar para uma versão mais recente de HTTP pode ser vantajoso em relação às versões mais antigas, e mudar para um protocolo síncrono em tempo real pode ser vantajoso ao fornecer recursos que usam tais recursos.",
  },
  {
    "status": 103,
    "legenda": "Early Hints",
    "imagem": "status103",
    "descricao": "É destinado principalmente a ser usado com o cabeçalho Link para permitir ao agente do usuário começar pré-carregamento de recursos enquanto o servidor ainda está preparando uma resposta.",
    "adicional": "O servidor pode enviar cabeçalhos para o navegador enquanto prepara a resposta final.",
  },
  {
    "status": 200,
    "legenda": "OK",
    "imagem": "status200",
    "descricao": "A resposta de status de sucesso que indica que a requisição foi bem sucedida. Uma resposta 200 é cacheável por padrão.",
    "adicional": "O resultado de sucesso de um PUT ou DELETE geralmente não são 200 OK, e sim 204 No Content (ou 201 Created quando o recurso é carregado pela primeira vez). O significado de sucesso depende do método de requisição HTTP: GET (recurso foi carregado e transmitido no corpo da mensagem), HEAD (cabeçalhos da entidade estão no corpo da mensagem), POST (recurso descrevendo o resultado da ação está no corpo da mensagem), TRACE (corpo da mensagem contém a mensagem da requisição tal qual foi recebida pelo servidor).",
  },
  {
    "status": 201,
    "legenda": "Created",
    "imagem": "status201",
    "descricao": "É utilizado como resposta de sucesso, indica que a requisição foi bem sucedida e que um novo recurso foi criado. Este novo recurso é efetivamente criado antes do retorno da resposta e o novo recurso é enviado no corpo da mensagem (pode vir na URL ou na header Location).",
    "adicional": "Comumente, este status é utilizado em requisições do tipo POST.",
  },
  {
    "status": 202,
    "legenda": "Accepted",
    "imagem": "status202",
    "descricao": "Indica que a requisição foi recebida, mas não pode atuar ainda. Ela é sem compromisso, significando que não há maneira de o HTTP enviar posteriormente uma resposta assíncrona indicando a saída do processamento da requisição. A intenção desta resposta é para os casos onde outro processo ou, ainda, servidor lida com a requisição ou para processamentos batch.",
    "adicional": "A resposta 202 é intencionalmente evasiva. Seu objetivo é permitir que um servidor aceite uma solicitação para algum outro processo (talvez um processo orientado a lote que é executado apenas uma vez por dia) sem exigir que a conexão do agente do usuário com o servidor persista até que o processo seja concluído.",
  },
  {
    "status": 203,
    "legenda": "Non-Authoritative Information",
    "imagem": "status203",
    "descricao": "A requisição foi realizada com sucesso porém o conteúdo foi modificado por um proxy da resposta com status 200 (OK) do servidor de origem. A resposta 203 é similar a resposta com cabeçalho de Warning 214 (depreciado), significando Transformação Aplicada, o qual tem uma vantagem adicional que pode ser aplicado a respostas com qualquer código de status.",
    "adicional": "Permite que o proxy notifique os destinatários quando uma transformação foi aplicada, uma vez que esse conhecimento pode impactar decisões posteriores sobre o conteúdo. Por exemplo, solicitações futuras de validação de cache para o conteúdo podem ser aplicáveis apenas ao longo do mesmo caminho de solicitação (por meio dos mesmos proxies).",
  },
  {
    "status": 204,
    "legenda": "No Content",
    "imagem": "status204",
    "descricao": "O servidor atendeu à solicitação com êxito e não há conteúdo adicional a ser enviado na resposta. Os metadados nos campos do cabeçalho da resposta referem-se ao recurso de destino e sua representação selecionada após a aplicação da ação solicitada.",
    "adicional": "O caso de uso comum é retornar 204 como resultado de uma solicitação PUT, atualizando um recurso, sem alterar o conteúdo atual da página exibida para o usuário. Se o recurso for criado, 201 Created será retornado. Se a página for alterada para a página recém-atualizada, o 200 deve ser usado em vez disso.",
  },
  {
    "status": 205,
    "legenda": "Reset Content",
    "imagem": "status205",
    "descricao": "A requisição foi bem-sucedida, mas informa ao cliente para reconfigurar a visualização do documento, para, por exemplo, limpar o conteúdo de um formulário, redefinir um estado da tela ou atualizar a interface do usuário.",
  },
  {
    "status": 206,
    "legenda": "Partial Content",
    "imagem": "status206",
    "descricao": "A requisição teve sucesso e o corpo contém a sequência (em bytes) dos dados, como descrito no cabeçalho Range da requisição. Se existe somente uma sequência, o Content-Type de toda a resposta é colocado para o tipo do documento, e o cabeçalho Content-Range é provido. Se várias sequências são mandadas como resposta, o Content-Type é colocado para multipart/byteranges e cada fragmento cobre uma sequência, com Content-Range e Content-Type descrevendo-os.",
  },
  {
    "status": 207,
    "legenda": "Multi-Status",
    "imagem": "status207",
    "descricao": "Indica uma mistura de respostas. Esta resposta é usada exclusivamente no contexto da Web Distributed Authoring e Versioning (WebDAV). O corpo de resposta é a text/xmlou a application/xmlentidade HTTP com a multistatuselemento raiz que lista códigos de resposta individuais.",
    "adicional": "Os navegadores que acessam páginas da web nunca encontrarão esse código de status. A capacidade de retornar uma coleção de recursos faz parte do protocolo WebDAV e só é encontrada por aplicativos da Web que acessam um servidor WebDAV.",
  },
  {
    "status": 208,
    "legenda": "Already Reported",
    "imagem": "status208",
    "descricao": "Usado dentro de um elemento de resposta DAV: propstat para evitar enumerar os membros internos de várias ligações para a mesma coleção repetidamente. Para cada associação a uma coleção dentro do escopo da solicitação, apenas uma será relatada com um status 200, enquanto os elementos DAV:response subsequentes para todas as outras associações usarão o status 208 e nenhum elemento DAV:response para seus descendentes será incluído.",
    "adicional": "Observe que o status 208 só ocorrerá para solicitações 'Depth: infinity' e que é de particular importância quando as várias ligações de coleção causam um loop de ligação.",
  },
  {
    "status": 226,
    "legenda": "IM Used",
    "imagem": "status226",
    "descricao": "O servidor atendeu a uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. A instância atual real pode não estar disponível, exceto pela combinação desta resposta com outras respostas anteriores ou futuras, conforme apropriado para a(s) manipulação(ões) de instância específica(s). Se assim for, os cabeçalhos da instância resultante são o resultado da combinação dos cabeçalhos da resposta 226 e das outras instâncias.",
  },
  {
    "status": 300,
    "legenda": "Multiple Choices",
    "imagem": "status300",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 301,
    "legenda": "Moved Permanently",
    "imagem": "status301",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 302,
    "legenda": "Found",
    "imagem": "status302",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 303,
    "legenda": "See Other",
    "imagem": "status303",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 304,
    "legenda": "Not Modified",
    "imagem": "status304",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 307,
    "legenda": "Temporary Redirect",
    "imagem": "status307",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 308,
    "legenda": "Permanent Redirect",
    "imagem": "status308",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 400,
    "legenda": "Bad Request",
    "imagem": "status400",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 401,
    "legenda": "Unauthorized",
    "imagem": "status401",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 402,
    "legenda": "Payment Required",
    "imagem": "status402",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 403,
    "legenda": "Forbidden",
    "imagem": "status403",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 404,
    "legenda": "Not Found",
    "imagem": "status404",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 405,
    "legenda": "Method Not Allowed",
    "imagem": "status405",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 406,
    "legenda": "Not Acceptable",
    "imagem": "status406",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 407,
    "legenda": "Proxy Authentication Required",
    "imagem": "status407",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 408,
    "legenda": "Request Timeout",
    "imagem": "status408",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 409,
    "legenda": "Conflict",
    "imagem": "status409",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 410,
    "legenda": "Gone",
    "imagem": "status410",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 411,
    "legenda": "Length Required",
    "imagem": "status411",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 412,
    "legenda": "Precondition Failed",
    "imagem": "status412",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 413,
    "legenda": "Content Too Large",
    "imagem": "status413",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 414,
    "legenda": "URI Too Long",
    "imagem": "status414",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 415,
    "legenda": "Unsupported Media Type",
    "imagem": "status415",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 416,
    "legenda": "Range Not Satisfiable",
    "imagem": "status416",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 417,
    "legenda": "Expectation Failed",
    "imagem": "status417",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 418,
    "legenda": "I'm a teapot",
    "imagem": "status418",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 421,
    "legenda": "Misdirected Request",
    "imagem": "status421",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 422,
    "legenda": "Unprocessable Content",
    "imagem": "status422",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 423,
    "legenda": "Locked",
    "imagem": "status423",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 424,
    "legenda": "Failed Dependency",
    "imagem": "status424",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 425,
    "legenda": "Too Early",
    "imagem": "status425",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 426,
    "legenda": "Upgrade Required",
    "imagem": "status426",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 428,
    "legenda": "Precondition Required",
    "imagem": "status428",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 429,
    "legenda": "Too Many Requests",
    "imagem": "status429",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 431,
    "legenda": "Request Header Fields Too Large",
    "imagem": "status431",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 451,
    "legenda": "Unavailable For Legal Reasons",
    "imagem": "status451",
    "descricao": "Em breve será adicionada a descrição.",
    "adicional": ""
  },
  {
    "status": 500,
    "legenda": "Internal Server Error",
    "imagem": "status500",
    "descricao": "Indica que encontrou uma condição inesperada e que o impediu de atender à solicitação. Essa resposta de erro é uma resposta genérica 'abrangente'. Às vezes, os arquivos log de servidores podem responder com um status code 500 acompanhado de mais detalhes sobre o request para evitar que no futuro erros desse tipo possam voltar a acontecer.",
  },
  {
    "status": 501,
    "legenda": "Not Implemented",
    "imagem": "status501",
    "descricao": "Indica que o servidor não suporta a funcionalidade requerida para completar a requisição. Esta é a resposta apropriada para quando o servidor não reconhece o método requisitado e não tem capacidade de suporta-lo para nenhum recurso. Os únicos métodos de requisição que os servidores suportam obrigatóriamente ( e, portanto, isso não deve retornar este código) são GET e HEAD.",
    "adicional": "Uma resposta 501 é cacheada por padrão, ou seja, a menos que os cabeçalhos de cache indiquem outra forma.",
  },
  {
    "status": 502,
    "legenda": "Bad Gateway",
    "imagem": "status502",
    "descricao": "Retornado pelo servidor indica que ele, enquanto atuando como um servidor intermediário (gateway ou proxy), recebeu uma resposta inválida do servidor para o qual a requisição foi encaminhada (upstream server).",
    "adicional": "Um Gateway pode se referir a coisas diferentes na rede e um erro 502 geralmente não é algo que você possa corrigir, mas requer uma correção por parte do servidor web ou dos proxies através dos quais você está tentando obter acesso.",
  },
  {
    "status": 503,
    "legenda": "Service Unavailable",
    "imagem": "status503",
    "descricao": "Indica que o servidor não está pronto para lidar com a requisição. Causas comuns são um servidor que está em manutenção ou sobrecarregado. Esta resposta deve ser usada para condições temporárias, e o cabeçalho HTTP Retry-After deve, se possível, conter o tempo estimado para restabelecimento do serviço.",
    "adicional": "Juntamente com esta resposta deve ser enviada uma página de fácil compreensão para explicar o problema. Tal resposta não deve ser armazenada em cache.",
  },
  {
    "status": 504,
    "legenda": "Gateway Timeout",
    "imagem": "status504",
    "descricao": "Indica que o servidor, enquanto atuando como gateway ou proxy, não conseguiu responder em tempo. Um Gateway pode referir-se a diferentes elementos de rede e um erro 504 geralmente é algo que você não pode consertar, mas solicitar uma correção no servidor web ou proxy no qual você está tentando acessar.",
  },
  {
    "status": 505,
    "legenda": "HTTP Version Not Supported",
    "imagem": "status505",
    "descricao": "Indica que a versão HTTP utilizada na requisição não é suportada pelo servidor.",
  },
  {
    "status": 506,
    "legenda": "Variant Also Negotiates",
    "imagem": "status506",
    "descricao": "Pode ser dado no contexto de Negociação de Conteúdo Transparente (Transparent Content Negotiation) (veja RFC 2295). Esse protocolo permite ao cliente requerer a melhor variante de um dado recurso, onde um servidor fornece múltiplos variantes. O código de status Variant Also Negotiates indica um erro na configuração interna do servidor na qual a variante escolhida é em si configurada para entrar em uma negociação de conteúdo, então não é um endpoint de negociação apropriado.",
  },
  {
    "status": 507,
    "legenda": "Insufficient Storage",
    "imagem": "status507",
    "descricao": "Pode ser usado no contexto do protocolo Web Distributed Authoring and Versioning (WebDAV) (veja RFC 4918). Isso indica que o método não pode ser executado porque o servidor não pode salvar a representação necessária para completar a requisição com sucesso.",
    "adicional": "Esta condição é considerada temporária. Se a solicitação que recebeu este código de status foi o resultado de uma ação do usuário, a solicitação não deve ser repetida até que seja solicitada por uma ação do usuário separada.",
  },
  {
    "status": 508,
    "legenda": "Loop Detected",
    "imagem": "status508",
    "descricao": "Pode ser retornado em um contexto do protocolo Web Distributed Authoring and Versioning (WebDAV). Indica que o servidor finalizou uma operação porque encontrou um loop infinito enquando processava a requisição com 'Depth: infinity'. Esse código indica que toda a operação falhou.",
  },
  {
    "status": 510,
    "legenda": "Not Extended",
    "imagem": "status510",
    "descricao": "É enviado no contexto do HTTP Extension Framework, definido na RFC 2774. Na especificação, um cliente pode mandar uma requisição que contenha uma declaração de extensão, que descreve a extensão a ser utilizada. Se o servidor aceitar tal requisição, mas quaisquer extensões descritas na requisição não forem suportadas, o servidor então retorna uma resposta com o código de status 510. A requisição requer extensões adicionais para ser processada corretamente.",
  },
  {
    "status": 511,
    "legenda": "Network Authentication Required",
    "imagem": "status511",
    "descricao": "O cliente precisa realizar uma autenticação para utilizar a rede. Esse status não é gerado pelos servidores de origem, mas pela interceptação de proxies que controlam o acesso à rede. Às vezes, as operadoras de rede exigem alguma autenticação, aceitação de termos ou outra interação do usuário antes de conceder acesso (por exemplo, em um cyber café ou em um aeroporto). Eles geralmente identificam clientes que não o fizeram usando seus endereços de Controle de Acesso à Mídia(MAC)",
    "adicional": "As respostas com o código de status 511 não devem ser armazenadas por um cache.",
  }
];

  
export default statusCodes;
  