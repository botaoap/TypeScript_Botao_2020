"use strict";
// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// hexadecimal
var meuHexadecimal = 3;
// octal
var meuOctal = 11;
// interpolação de string
var logradouro = "5";
var numero = 123;
var cidade = "Blumenau";
var estado = "SC";
alert("Endereço: " + logradouro + ", " + numero + ". " + cidade + " - " + estado);
alert("Endere\u00E7o: " + logradouro + ", " + numero + ". " + cidade + " - " + estado); // Interpolação
// arrays
var notasAlunos = [8, 6, 7, 9];
// pode ser declarado com <> operador diamante, onde terá o mesmo efeito
var meuArray = [8, 6, 7, 9];
// índices - in
for (var i in notasAlunos) {
    console.log(i);
}
// valores - of
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var notaAluno = notasAlunos_1[_i];
    console.log(notaAluno);
}
