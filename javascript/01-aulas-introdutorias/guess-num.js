function guessNum() {
    var codigo = Math.round(Math.random() * 10);
    if (input.value == codigo) {
        alert("Você ACERTOU!");
    } else {
        alert("Você ERROU!");
    }
    input.value = "";
    input.focus();
    document.write("<br>O código gerado era " + codigo);
}