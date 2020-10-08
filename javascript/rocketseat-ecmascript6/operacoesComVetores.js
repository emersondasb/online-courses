// O map() é uma forma de percorrer vetores.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// O map() recebe como parâmetro uma função. O segundo parâmetro é o índice.
const newArr = arr.map(function (item) {
  return (item += 1);
});
console.log(newArr);

// Reduz um vetor a um único valor.
const sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);

// Retorna valores do vetor caso a condição do return seja true.
const filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);

// Busca um valor no vetor.
const find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
