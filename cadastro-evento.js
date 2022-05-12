//Montar o sistema de cadastro de eventos
//Ser maior que 18 anos

let entrada1 = require("readline-sync");

let Nome = entrada1.question("Informe seu nome completo: ");


let entrada2 = require("readline-sync");

let Idade = entrada2.question("Informe sua idade: ");

if(Idade >= 18){
    
} else{
    console.log("idade não permetida para cadastro!");
}


let entrada3 = require("readline-sync");
let dataAtual = entrada3.question("Informe a data do evento: ");

if(dataAtual >= "12/05/2022"){
    console.log("Data permitida para cadastro, agora me informe o numero de participantes.");
} else {
    console.log("Data Inválida.");
}

let entrada4 = require("readline-sync");
let numeroParticipantes = entrada4.question("Numero de Participantes: ");

if(numeroParticipantes <= 100){
    console.log(entrada4.question("Numero de palestrantes: "));
    console.log("Cadastro efetivado!");
} else {
    console.log("Numero de participantes excedido.");
}