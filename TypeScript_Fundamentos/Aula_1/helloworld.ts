function dizerOla(nome: string){
    console.log('Olá' + nome);

}

dizerOla('Botão');

// Fazer interpolação de strings

// Let - é um tipo de variavel
// Let - Varial que tem um escopo (espoco menor) 
// Var é uma varaivel global (escocpo maior)

let logradouro: string = "Rua 7 de Setembro";
let numero: string = "123B";
let cidade: string = "Blumenau";
let estado: string = "SC";

//Alert normal ↓↓
alert("Endereço: " + logradouro + ", " + numero + ".  " + cidade + " - " + estado);
//Alert com interpolação de string ↓↓
alert(`Endereço: ${logradouro}, ${numero}. ${cidade} - ${estado} `);