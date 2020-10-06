function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) return resolve();
      return reject();
    }, 2000);
  });
}
checaIdade(12)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
