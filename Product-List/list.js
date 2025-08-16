//recebe todas as imagens dos itens
let imgItens = document.getElementsByClassName("imgItens");


//recebe todos os button
let btns = document.getElementsByClassName('btns');

//span do botão quando não está selecionado
let textBtnsVazio = document.getElementsByClassName("textBtnsVazio");
for(let i = 0; i<textBtnsVazio.length;i++){
    textBtnsVazio[i].style.display = "block";
}

//span do botão quando foi selecionado
let textBtnsClicado = document.getElementsByClassName('textBtnsClicado');
for(let i = 0; i<textBtnsClicado.length;i++){
    textBtnsClicado[i].style.display = "none";
}

//função executada ao clicar o btn
function selecionado(identificador,nome,valor,qtde){
    //remove o conteudo inicial do btn
    textBtnsVazio[identificador].style.display = "none"; 

    //trocas de classes de estilo
    btns[identificador].classList.add('btns-ativo');

    imgItens[identificador].classList.add('imgItens-ativo');

    //adiciona o segundo conteúdo do btn
    textBtnsClicado[identificador].style.display = "block";

    return;
}