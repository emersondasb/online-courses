const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const idades = usuarios.map((elemento) => {
  return elemento.idade;
});
console.log(idades);

const usuariosRSMaiores = usuarios.filter((elemento) => {
  return elemento.empresa === "Rocketseat" && elemento.idade > 18;
});
console.log(usuariosRSMaiores);

const usuariosGoogle = usuarios.find((elemento) => {
  return elemento.empresa === "Google";
});
console.log(usuariosGoogle);

const usuariosNovaIdade = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);
console.log(usuariosNovaIdade);
