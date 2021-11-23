let produtos = [
    {
        "id": "1e68fDBWrpa3khaBcCGc",
        "doado": 0,
        "meta": 50,
        "nome": "Bolacha Maizena",
        "quantidade": 0
    },
    {
        "id": "76mhrQ4EYkmcuFskMNr4",
        "nome": "Pacote Açúcar 1K",
        "meta": 100,
        "doado": 0,
        "quantidade": 0
    },
    {
        "id": "91uv4xMcZX135wRpz29T",
        "doado": 0,
        "nome": "Litro Óleo",
        "meta": 100,
        "quantidade": 0
    },
    {
        "id": "D6Deni63hdw8A3JMjZXV",
        "meta": 50,
        "doado": 0,
        "nome": "Pacote Fubá 1K",
        "quantidade": 0
    },
    {
        "id": "I21W3i9XIB5l6BXwoKCl",
        "meta": 100,
        "nome": "Pacote Feijão 1K",
        "doado": 0,
        "quantidade": 0
    },
    {
        "id": "JpH5m2rOjbpCyU5y6pCj",
        "nome": "Pacote Café 500 gramas",
        "doado": 0,
        "meta": 50,
        "quantidade": 0
    },
    {
        "id": "LPVQtSylhyeky2GhhmyG",
        "meta": 50,
        "doado": 0,
        "nome": "Pacote de Arroz 5k",
        "quantidade": 0
    },
    {
        "id": "MIlrTjjIrl2ZOQgdFUL6",
        "nome": "Achocolatado 400gr",
        "meta": 50,
        "doado": 0,
        "quantidade": 0
    },
    {
        "id": "QvH5p1jZG8IF3P7svWrq",
        "nome": "Pacote Sal 1k",
        "doado": 0,
        "meta": 50,
        "quantidade": 0
    },
    {
        "id": "TWNu4cNTRWOsHwGZ54Sr",
        "doado": 0,
        "meta": 100,
        "nome": "Molho Tomate 240 gr",
        "quantidade": 0
    },
    {
        "id": "UDzLewiKXmPjFvtAX6QA",
        "nome": "Bolacha Água Sal",
        "meta": 50,
        "doado": 0,
        "quantidade": 0
    },
    {
        "id": "YXT8e5zYQ6eFjYTuokUZ",
        "meta": 50,
        "nome": "Pacote Farinha Trigo",
        "doado": 0,
        "quantidade": 0
    },
    {
        "id": "kZxzpzwEQ7f4UoHTmxc9",
        "doado": 0,
        "nome": "Pacote Macarrão 500gr",
        "meta": 100,
        "quantidade": 0
    }
];

function compare(a,b) {
    if (a.nome < b.nome)
       return -1;
    if (a.nome > b.nome)
      return 1;
    return 0;
  }

let _produtos = produtos.sort(compare);

export default _produtos;