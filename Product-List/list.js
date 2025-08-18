//recebe todas as imagens dos itens
let imgItens = document.getElementsByClassName("imgItens");

//recebe todos os button inativos
let btns = document.getElementsByClassName('btns');
for(let i = 0;i<btns.length;i++){
    btns[i].style.display = "block";
}

//recebe todos os btns ativos
let btns_ativos = document.getElementsByClassName('btns-ativado');
for(let i = 0;i<btns_ativos.length;i++){
    btns_ativos[i].style.display = "none";
}

//recebendo os valores para aprecer ao adicionar itens
let valorBtnsItem = document.getElementsByClassName("valorBtnsItem");

let valorAddItem = [0,0,0,0,0,0];

//função executada ao clicar o btn
function selecionado(identificador,nome,valor,qtde){

    btns[identificador].style.display = "none";
    btns_ativos[identificador].style.display = "block";

    imgItens[identificador].classList.add('imgItens-ativo');

    //alteração de valores nos btns ao clica-los
    if(valorAddItem[identificador] == 0){
        valorAddItem[identificador] ++;
        valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];
    }else{
        somarItem(identificador);
    }
    
    //adiciona o segundo conteúdo do btn
    textBtnsClicado[identificador].style.display = "block";

    return;
}

//funçaõ para as operações positivas
function somarItem(identificador){
    valorAddItem[identificador] ++;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];
}

function diminuirItem(identificador){
    valorAddItem[identificador] --;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];
}