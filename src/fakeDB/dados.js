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
        "imagem": "status"
    },
    {
        "status": 300,
        "legenda": "Multiple Choices",
        "imagem": "status300"
    },
    {
        "status": 301,
        "legenda": "Moved Permanently",
        "imagem": "status301"
    },
    {
        "status": 302,
        "legenda": "Found",
        "imagem": "status302"
    },
    {
        "status": 303,
        "legenda": "See Other",
        "imagem": "status303"
    },
    {
        "status": 304,
        "legenda": "Not Modified",
        "imagem": "status304"
    },
    {
        "status": 307,
        "legenda": "Temporary Redirect",
        "imagem": "status307"
    },
    {
        "status": 308,
        "legenda": "Permanent Redirect",
        "imagem": "status308"
    },
    {
      "status": 400,
      "legenda": "Bad Request",
      "imagem": "status400"
    },
    {
      "status": 401,
      "legenda": "Unauthorized",
      "imagem": "status401"
    },
    {
      "status": 402,
      "legenda": "Payment Required",
      "imagem": "status402"
    },
    {
      "status": 403,
      "legenda": "Forbidden",
      "imagem": "status403"
    },
    {
      "status": 404,
      "legenda": "Not Found",
      "imagem": "status404"
    },
    {
      "status": 405,
      "legenda": "Method Not Allowed",
      "imagem": "status405"
    },
    {
      "status": 406,
      "legenda": "Not Acceptable",
      "imagem": "status406"
    },
    {
      "status": 407,
      "legenda": "Proxy Authentication Required",
      "imagem": "status"
    },
    {
      "status": 408,
      "legenda": "Request Timeout",
      "imagem": "status408"
    },
    {
      "status": 409,
      "legenda": "Conflict",
      "imagem": "status409"
    },
    {
      "status": 410,
      "legenda": "Gone",
      "imagem": "status410"
    },
    {
      "status": 411,
      "legenda": "Length Required",
      "imagem": "status"
    },
    {
      "status": 412,
      "legenda": "Precondition Failed",
      "imagem": "status"
    },
    {
      "status": 413,
      "legenda": "Content Too Large",
      "imagem": "status413"
    },
    {
      "status": 414,
      "legenda": "URI Too Long",
      "imagem": "status"
    },
    {
      "status": 415,
      "legenda": "Unsupported Media Type",
      "imagem": "status"
    },
    {
      "status": 416,
      "legenda": "Range Not Satisfiable",
      "imagem": "status"
    },
    {
      "status": 417,
      "legenda": "Expectation Failed",
      "imagem": "status"
    },
    {
      "status": 418,
      "legenda": "I'm a teapot",
      "imagem": "status"
    },
    {
      "status": 421,
      "legenda": "Misdirected Request",
      "imagem": "status"
    },
    {
      "status": 422,
      "legenda": "Unprocessable Content",
      "imagem": "status"
    },
    {
      "status": 423,
      "legenda": "Locked",
      "imagem": "status423"
    },
    {
      "status": 424,
      "legenda": "Failed Dependency",
      "imagem": "status"
    },
    {
      "status": 425,
      "legenda": "Too Early",
      "imagem": "status"
    },
    {
      "status": 426,
      "legenda": "Upgrade Required",
      "imagem": "status"
    },
    {
      "status": 428,
      "legenda": "Precondition Required",
      "imagem": "status"
    },
    {
      "status": 429,
      "legenda": "Too Many Requests",
      "imagem": "status429"
    },
    {
      "status": 431,
      "legenda": "Request Header Fields Too Large",
      "imagem": "status"
    },
    {
      "status": 451,
      "legenda": "Unavailable For Legal Reasons",
      "imagem": "status"
    },
    {
      "status": 500,
      "legenda": "Internal Server Error",
      "imagem": "status500"
    },
    {
      "status": 501,
      "legenda": "Not Implemented",
      "imagem": "status"
    },
    {
      "status": 502,
      "legenda": "Bad Gateway",
      "imagem": "status502"
    },
    {
      "status": 503,
      "legenda": "Service Unavailable",
      "imagem": "status"
    },
    {
      "status": 504,
      "legenda": "Gateway Timeout",
      "imagem": "status"
    },
    {
      "status": 505,
      "legenda": "HTTP Version Not Supported",
      "imagem": "status"
    },
    {
      "status": 506,
      "legenda": "Variant Also Negotiates",
      "imagem": "status506"
    },
    {
      "status": 507,
      "legenda": "Insufficient Storage",
      "imagem": "status507"
    },
    {
      "status": 508,
      "legenda": "Loop Detected",
      "imagem": "status508"
    },
    {
      "status": 510,
      "legenda": "Not Extended",
      "imagem": "status510"
    },
    {
      "status": 511,
      "legenda": "Network Authentication Required",
      "imagem": "status511"
    }
  ];
  
export default statusCodes;
  