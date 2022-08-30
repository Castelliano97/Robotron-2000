// Variaveis de botoes
// const subtrair = document.querySelectorAll("#subtrair");
// const somar = document.querySelectorAll("#somar");

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })

})

function manipulaDados (operacao, valor){
    const peca = valor.querySelector("[data-contador]");
    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }
    else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica (peca){
    estatistica.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}


// Criei constantes subtrair e somar para selecionar os botões mas acabei não precisando dela
// a constante controle serve para listar todas as vezes que os botoes de controle aparecem
// depois usei a forEach pra "toda vez que eu" clicar num dos elementos do array controle eu chamar a funcao manipulaDados
// evento.target.textContent serve pra mostrar o texto que tem dentro daquela tag daquele item do array