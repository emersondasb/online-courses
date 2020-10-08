const arr = [1, 2, 3, 4, 5, 6];

const x = arr[0];
const [a, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lontras" },
};
console.log(usuario2);
console.log(usuario3);
