// enquanto não utilizo um banco de dados externo o array de http status code será salvo aqui;
const statusCodes = [
    {
      "status": 100,
      "legenda": "Continue",
      "imagem": "status100"
    },
    {
      "status": 101,
      "legenda": "Switching Protocols",
      "imagem": "status101"
    },
    {
      "status": 103,
      "legenda": "Early Hints",
      "imagem": "status103"
    },
    {
      "status": 200,
      "legenda": "OK",
      "imagem": "status200"
    },
    {
      "status": 201,
      "legenda": "Created",
      "imagem": "status201"
    },
    {
      "status": 202,
      "legenda": "Accepted",
      "imagem": "status202"
    },
    {
        "status": 203,
        "legenda": "Non-Authoritative Information",
        "imagem": "status203"
    },
    {
      "status": 204,
      "legenda": "No Content",
      "imagem": "status204"
    },
    {
        "status": 205,
        "legenda": "Reset Content",
        "imagem": "status205"
    },
    {
        "status": 206,
        "legenda": "Partial Content",
        "imagem": "status206"
    },
    {
        "status": 207,
        "legenda": "Multi-Status",
        "imagem": "status207"
    },
    {
        "status": 208,
        "legenda": "Already Reported",
        "imagem": "status208"
    },
    {
        "status": 226,
        "legenda": "IM Used",
        "imagem": "status226"
    },
    {
        "status": 300,
        "legenda": "Multiple Choices",
        "imagem": "status300"
    }
    // {
    //   "status": 301,
    //   "legenda": "Moved Permanently",
    //   "imagem": "status301"
    // },
    // {
    //   "status": 302,
    //   "legenda": "Found",
    //   "imagem": "status302"
    // },
    // {
    //   "status": 303,
    //   "legenda": "See Other",
    //   "imagem": "status303"
    // },
    // {
    //   "status": 304,
    //   "legenda": "Not Modified",
    //   "imagem": "status304"
    // },
    // {
    //   "status": 307,
    //   "legenda": "Temporary Redirect",
    //   "imagem": "status307"
    // },
    // {
    //   "status": 308,
    //   "legenda": "Permanent Redirect",
    //   "imagem": "status308"
    // },
    // {
    //   "status": 400,
    //   "legenda": "Bad Request",
    //   "imagem": "status400"
    // },
    // {
    //   "status": 401,
    //   "legenda": "Unauthorized",
    //   "imagem": "status401"
    // },
    // {
    //   "status": 402,
    //   "legenda": "Payment Required",
    //   "imagem": "status402"
    // },
    // {
    //   "status": 403,
    //   "legenda": "Forbidden",
    //   "imagem": "status403"
    // },
    // {
    //   "status": 404,
    //   "legenda": "Not Found",
    //   "imagem": "status404"
    // },
    // {
    //   "status": 405,
    //   "legenda": "Method Not Allowed",
    //   "imagem": "status405"
    // },
    // {
    //   "status": 406,
    //   "legenda": "Not Acceptable",
    //   "imagem": "status406"
    // },
    // {
    //   "status": 407,
    //   "legenda": "Proxy Authentication Required",
    //   "imagem": "status407"
    // },
    // {
    //   "status": 408,
    //   "legenda": "Request Timeout",
    //   "imagem": "status408"
    // },
    // {
    //   "status": 409,
    //   "legenda": "Conflict",
    //   "imagem": "status409"
    // },
    // {
    //   "status": 410,
    //   "legenda": "Gone",
    //   "imagem": "status410"
    // },
    // {
    //   "status": 411,
    //   "legenda": "Length Required",
    //   "imagem": "status411"
    // },
    // {
    //   "status": 412,
    //   "legenda": "Precondition Failed",
    //   "imagem": "status412"
    // },
    // {
    //   "status": 413,
    //   "legenda": "Payload Too Large",
    //   "imagem": "status413"
    // },
    // {
    //   "status": 414,
    //   "legenda": "URI Too Long",
    //   "imagem": "status414"
    // },
    // {
    //   "status": 415,
    //   "legenda": "Unsupported Media Type",
    //   "imagem": "status415"
    // },
    // {
    //   "status": 416,
    //   "legenda": "Range Not Satisfiable",
    //   "imagem": "status416"
    // },
    // {
    //   "status": 417,
    //   "legenda": "Expectation Failed",
    //   "imagem": "status417"
    // },
    // {
    //   "status": 426,
    //   "legenda": "Upgrade Required",
    //   "imagem": "status426"
    // },
    // {
    //   "status": 428,
    //   "legenda": "Precondition Required",
    //   "imagem": "status428"
    // },
    // {
    //   "status": 429,
    //   "legenda": "Too Many Requests",
    //   "imagem": "status429"
    // },
    // {
    //   "status": 431,
    //   "legenda": "Request Header Fields Too Large",
    //   "imagem": "status431"
    // },
    // {
    //   "status": 451,
    //   "legenda": "Unavailable For Legal Reasons",
    //   "imagem": "status451"
    // },
    // {
    //   "status": 500,
    //   "legenda": "Internal Server Error",
    //   "imagem": "status500"
    // },
    // {
    //   "status": 501,
    //   "legenda": "Not Implemented",
    //   "imagem": "status501"
    // },
    // {
    //   "status": 502,
    //   "legenda": "Bad Gateway",
    //   "imagem": "status502"
    // },
    // {
    //   "status": 503,
    //   "legenda": "Service Unavailable",
    //   "imagem": "status503"
    // },
    // {
    //   "status": 504,
    //   "legenda": "Gateway Timeout",
    //   "imagem": "status504"
    // }
  ];
  
export default statusCodes;
  