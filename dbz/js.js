let elementoResposta = window.document.querySelector('#resposta')
let inputPergunta = window.document.querySelector('#inputPergunta')
let buttonPerguntar = window.document.querySelector('#buttonPergunta')
let respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta(){
    if(inputPergunta.value == "") {
        alert("Digite sua Pergunta")
        return
    }

    buttonPerguntar.setAttribute('disabled', true)

    let pergunta = "<div>" + inputPergunta.value + "</div>"

    /*gerar numero aleatorio*/
    let totalRespostas = respostas.length
    let numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    /* sumir a resposta depois de 3 seg*/
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute('disabled')

    }, 3000)
}
