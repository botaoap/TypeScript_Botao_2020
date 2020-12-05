// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// hexadecimal
let meuHexadecimal: number = 0b11;

// octal
let meuOctal: number = 0o13;

// interpolação de string
let logradouro: string = "5";
let numero: number = 123;
let cidade: string = "Blumenau";
let estado: string = "SC";

alert("Endereço: " + logradouro + ", " + numero + ". " + cidade + " - " + estado);
alert(`Endereço: ${logradouro}, ${numero}. ${cidade} - ${estado}`); // Interpolação

// arrays
let notasAlunos: number[] = [8, 6, 7, 9];

// pode ser declarado com <> operador diamante, onde terá o mesmo efeito
let meuArray: Array<number> = [8, 6, 7, 9];

// índices - in
for (let i in notasAlunos){
    console.log(i);
}

// valores - of // pegar o valor de dentro da variavel
for (let notaAluno of notasAlunos){
    console.log(notaAluno);
}