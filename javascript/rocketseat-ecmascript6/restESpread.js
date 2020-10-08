// Rest serve para pegar o resto das propriedades de um objeto
const usuario = {
  nome: "Emerson",
  idade: 32,
  empresa: "Fábrica de Software",
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(a, b, ...params) {
  return a, b, params;
}

console.log(soma(arr[0], arr[1], arr));

// Spread repassa informações de um objeto ou vetor para outra estrutura de dados
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuarioExtra = { ...usuario, nome: "Emerson Bezerra", cidade: "João Pessoa" };

console.log(usuarioExtra);
