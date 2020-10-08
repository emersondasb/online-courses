import { subtracao as sub } from "../funcoes";

console.log(sub(1, 2));

class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super(); // Chama construtor da classe pai.
    this.usuario = "Emerson";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

class Matematica {
  static soma(a, b) {
    // Classe com métodos estáticos não precisa de construtor
    return a + b;
  }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhaLista.add("Novo todo");
};

MinhaLista.mostraUsuario();

console.log(Matematica.soma(3, 5)); // Método estático pode ser usado sem instanciar a classe a qual pertence.


// Async e await
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

// Forma tradicional de executar uma Promise:
// minhaPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {});

async function executaPromise() {
  const response = await minhaPromise();
  console.log(response);
}

executaPromise();
