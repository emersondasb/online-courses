const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
}
var info = mostraInfo({ nome: "Diego", idade: 23 });
console.log(info);