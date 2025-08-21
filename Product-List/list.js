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

//recebendo os valores para aparecer ao adicionar itens
let valorBtnsItem = document.getElementsByClassName("valorBtnsItem");

let valorAddItem = [0,0,0,0,0,0];
let valorFixAddItem = [0,0,0,0,0,0];

//var para receber a quantidade total de itens adicionados ao carrinho
let qtdICSpan = document.getElementById("qtdCarrinho"); //ic= itens carrinho
let qtdItensCarrinho = 0;

//ICspan recebe o valor inicial 0 da atde de itens
qtdICSpan.innerText= qtdItensCarrinho;

//area para alterações no carrinho
let carrinho = document.getElementById("carrinho");
let carrinhoVazio = document.getElementById("carrinhoVazio");

let item_carrinho = document.getElementsByClassName("item_carrinho");

let carrinhoCheio = document.getElementById("carrinhoCheio");
    carrinhoCheio.style.display = "none";

let spanSomaValores = document.getElementById("somaValores");
let somaValores = 0;

//var para receber o cnt do pedido confirmado
let cntPedidoConfirm = document.getElementById("cntPedidoConfirm");
cntPedidoConfirm.style.display = "none";

//função executada ao clicar o btn
function selecionado(identificador,nome,valor,qtde){

    //criação de uma div para os itens adicionados ao carrinho
    let carrinhoItemDiv = document.createElement("div");

    carrinhoItemDiv.setAttribute("data-id", identificador)

    //alteração de valor no btn clicado
    valorAddItem[identificador] ++;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    //alteração de valor de qtd de itens no carrinho
    qtdItensCarrinho ++;
    qtdICSpan.innerText = qtdItensCarrinho;

    //adiciona o valor do item ao total do pedido
    somaValores += valor;
    spanSomaValores.innerText = somaValores;

    //mostra a area visual do carrinho cheio(com item adicionado)
    carrinhoCheio.style.display = "flex";


    //retira a div de carrinho vazio
    carrinhoVazio.style.display = "none";

    //passsa uma classe para o item criado
    carrinhoItemDiv.classList.add("item_carrinho");

    //criacao da variavel para receber o html de criacao de conteudo
    let conteudoHTMLItemDiv =  `
        <p class="nomeItem">${nome}</p>
        <div class="itemCarrinhoHTML" data-id = "${identificador}">
        <div class="descricaoItem">
            <p class="qtdEvalor"><span class="qtdItem">${valorAddItem[identificador]}x</span> R$ ${valor}</p>
            <span class="excluirItem" onclick="excluirItem(${identificador}, this,${valor})">X</span>
        </div>
        </div>
    `;

    //^^^^^^^^ this é a referênciado elemento clicado, para acessar o pai que é o .item_carrinho

    //conteudo do item criado
    carrinhoItemDiv.innerHTML = conteudoHTMLItemDiv;

    //joga o item criado para o último lugar da div carrinho
    carrinho.appendChild(carrinhoItemDiv);

    //faz a troca de botões
    btns[identificador].style.display = "none";
    btns_ativos[identificador].style.display = "block";

    //troca de estilo das imagens dos itens
    imgItens[identificador].classList.add('imgItens-ativo');

    return;
}


//funçaõ para as operações positivas
function somarItem(identificador,nome,valor){
    //var para receber o primeiro elemento que encontrar e corresponder ao seletor css
    let itemDiv = document.querySelector(`.itemCarrinhoHTML[data-id="${identificador}"]`);

    //verifica se o itemDiv existe
    if (itemDiv) {
        //var que recebe um elemento com a classe qtdItem dentro de itemDiv
        let qtdSpan = itemDiv.querySelector(".qtdItem");

        //verifica se o qtdSpan existe para fazer alteração de valor mostrado
        //na quantidade mostrada +1
        if (qtdSpan) {
            qtdSpan.textContent = `${valorAddItem[identificador]+1}x`;
        }
    }

    //adição de itens
    valorAddItem[identificador] ++;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    //adição do valor de itens ao total do pedido
    somaValores += valor;
    spanSomaValores.innerText = somaValores;

    //alteração de valor na qtd de itens no carrinho
    qtdItensCarrinho++;
    qtdICSpan.innerText = qtdItensCarrinho;
}


//função para as operações negativas
function diminuirItem(identificador,nome,valor,elementoX){
    //var para receber o primeiro elemento que encontrar e corresponder ao seletor css
    let itemDiv = document.querySelector(`.itemCarrinhoHTML[data-id="${identificador}"]`);

    //verifica se o itemDiv existe
    if (itemDiv) {
        //var que recebe um elemento com a classe qtdItem dentro de itemDiv
        let qtdSpan = itemDiv.querySelector(".qtdItem");

        //verifica se o qtdSpan existe para fazer alteração de valor mostrado
        //na quantidade mostrada -1
        if (qtdSpan) {
            qtdSpan.textContent = `${valorAddItem[identificador]-1}x`;
        }
    }

    //decremento de itens
    valorAddItem[identificador] --;
    valorBtnsItem[identificador].innerHTML = valorAddItem[identificador];

    //decremento do valor de itens ao total do pedido
    somaValores -= valor;
    spanSomaValores.innerText = somaValores;

    if(valorFixAddItem[identificador]>1){
        valorFixAddItem[identificador]--;
    }

    //alteração de valor na qtd de itens no carrinho
    qtdItensCarrinho--;
    qtdICSpan.innerText = qtdItensCarrinho;

    //verificação para não ter qtd negativa
    if(valorAddItem[identificador]===0){
        //alterações visuais
        btns[identificador].style.display = "block";
        btns_ativos[identificador].style.display = "none";

        imgItens[identificador].classList.remove('imgItens-ativo');

        //elimina  do carrinho o item
        excluirItem(identificador,null,valor);
    }

    //faz a div carrinhoVazio reaparecer aos itens serem zero
    if(qtdItensCarrinho===0){
        //alterações visuais
        carrinhoVazio.style.display="flex";

        carrinhoCheio.style.display = "none";
    }
}


//função para exclusão dos itens com o X no carrinho
function excluirItem(identificador, elementoX,valor){
    
    //criacao de var para receber a div a ser eliminada
    let itemDiv;

    if(elementoX){
        //itemDiv a ser eliminado dependendo do elementoX
        itemDiv = elementoX.closest(".item_carrinho");
    }else{
        //itemDiv a ser eliminado sem depender do elementoX
        itemDiv = document.querySelector(`.item_carrinho[data-id = "${identificador}"]`);
    }

    //remove o itemDiv clicado
    if(itemDiv){
        itemDiv.remove();
    }

    //guardando quantidade antes de zerar
    let qtdRemovida = valorAddItem[identificador];

    //altera valor mostrado da quantidade de itens no carrinho
    qtdItensCarrinho -= qtdRemovida;
    qtdICSpan.innerText = qtdItensCarrinho;    

    //zera valores dos btns do item
    valorAddItem[identificador] = 0;
    valorBtnsItem[identificador].innerHTML = 0;

    //realiza as trocas de visuais dos btns respectivos dos itens eliminados
    if(valorAddItem[identificador]===0){
        //alterações visuais
        btns[identificador].style.display = "block";
        btns_ativos[identificador].style.display = "none";

        imgItens[identificador].classList.remove('imgItens-ativo');
    }

    //calculo para ajustar o valor total do pedido
    //baseado na quantidade e valor do item removido
    somaValores -= valor * qtdRemovida;
    spanSomaValores.innerText = somaValores;
    valorAddItem[identificador] = 0;

    //realiza a troca de visuais do carrinho caso não existam mais itens
    if(qtdItensCarrinho ===0){
        //alterações visuais
        carrinhoVazio.style.display="flex";

        carrinhoCheio.style.display = "none";
    }

}

//função para confirmação de pedido
function confirmarPedido(){
    cntPedidoConfirm.style.display = "flex";
}

//função para novo pedido
function novoPedido(){
    window.location.href = 'index.html';
}