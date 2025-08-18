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

//var para receber a quantidade total de itens adicionados ao carrinho
let qtdICSpan = document.getElementById("qtdCarrinho"); //ic= itens carrinho
let qtdItensCarrinho = 0;

//ICspan recebe o valor inicial 0 da atde de itens
qtdICSpan.innerText= qtdItensCarrinho;


//função executada ao clicar o btn
function selecionado(identificador,nome,valor,qtde){

    btns[identificador].style.display = "none";
    btns_ativos[identificador].style.display = "block";

    imgItens[identificador].classList.add('imgItens-ativo');

    valorAddItem[identificador] ++;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    qtdItensCarrinho ++;

    qtdICSpan.innerText = qtdItensCarrinho;

    return;
}

//funçaõ para as operações positivas
function somarItem(identificador){
    //adição de itens
    valorAddItem[identificador] ++;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    //alteração de valor na qtd de itens no carrinho
    qtdItensCarrinho++;
    qtdICSpan.innerText = qtdItensCarrinho;
}

//função para as operações negativas
function diminuirItem(identificador){
    //decremento de itens
    valorAddItem[identificador] --;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    //alteração de valor na qtd de itens no carrinho
    qtdItensCarrinho--;
    qtdICSpan.innerText = qtdItensCarrinho;

    //verificação para não ter qtd negativa
    if(valorAddItem[identificador]===0){
        btns[identificador].style.display = "block";
        btns_ativos[identificador].style.display = "none";

        imgItens[identificador].classList.remove('imgItens-ativo');

    }
}