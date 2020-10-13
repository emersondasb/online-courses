const app = require("./app");

const porta = 3000;

app.listen(3000, ()=> {
    console.log(`O servidor está [ON] na porta ${porta}.`)
});