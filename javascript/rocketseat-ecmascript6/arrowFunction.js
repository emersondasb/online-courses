const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArr = arr.map((item) => {
//   return item += 1;
// });
// console.log(newArr);

// Se houver apenas um parâmetro, os parênteses são opcionais.
// const newArr = arr.map(item => {
//   return item += 1;
// });
// console.log(newArr);

// Se houver apenas um retorno na função, pode ficar assim:
const newArr = arr.map(item => item += 1);
console.log(newArr);

// É possível criar funções usando variáveis connstantes:
const teste = () => {
    return 'Teste'
}
console.log(teste());