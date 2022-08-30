// Variaveis de botoes
// const subtrair = document.querySelectorAll("#subtrair");
// const somar = document.querySelectorAll("#somar");

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.textContent)})
})

// Partes
const bracos = document.querySelector("#bracos");

function manipulaDados (operacao){
    if (operacao === "-"){
        bracos.value = parseInt(bracos.value) - 1;
    }
    else{
        bracos.value = parseInt(bracos.value) + 1;
    }
}


// Criei constantes subtrair e somar para selecionar os botões mas acabei não precisando dela
// a constante controle serve para listar todas as vezes que os botoes de controle aparecem
// depois usei a forEach pra "toda vez que eu" clicar num dos elementos do array controle eu chamar a funcao manipulaDados
// evento.target.textContent serve pra mostrar o texto que tem dentro daquela tag daquele item do array