const usuario = {
  nome: "Emerson",
  idade: 32,
  endereco: {
    cidade: "João Pessoa",
    estado: "Paraíba",
  },
};

// Forma tradicional de obter dados do objeto acima:
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// console.log(nome, idade, cidade);

// Usando desestruturação:
const { nome, idade, endereco: { cidade }} = usuario;
console.log(nome, idade, cidade);

// Pode-se usar desestruturação em parâmetros também:
function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);