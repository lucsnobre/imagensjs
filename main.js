"use strict";

const botaoTrocaImagem = document.getElementById('trocar-imagem');
const imgPrincipal = document.getElementById("imagem1");
const barrinha = document.getElementById("barrinha");

const arrayImagens = [
    './img/1.webp',
    './img/2.png',
    './img/3.webp',
    './img/4.webp',
    './img/5.webp'
];

const nomesImagens = ['1', '2', '3', '4', '5'];

const coresBotoes = ['#737172', '#E65C1A', '#293494', '#ae436b', '#8b192b'];

function trocarImagem() {
    const nomeImagem = barrinha.value.trim();
    let indice;

    if (nomeImagem && nomesImagens.includes(nomeImagem)) {
        indice = nomesImagens.indexOf(nomeImagem);
    } else {
        indice = Math.floor(Math.random() * arrayImagens.length);
    }

    imgPrincipal.src = arrayImagens[indice];
    botaoTrocaImagem.style.backgroundColor = coresBotoes[indice];

    barrinha.value = '';
}

botaoTrocaImagem.addEventListener('click', trocarImagem);

barrinha.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        trocarImagem();
    }
});
