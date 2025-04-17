//botão de adicionar carrinho
let buttonSelect = document.getElementsByClassName('buy');
for (let bs = 0; bs < buttonSelect.length; bs++) {
    buttonSelect[bs].style.backgroundColor = 'rgb(252, 249, 247)';
    buttonSelect[bs].style.display=`block`;
}

//botao que deve aparecer ao clicar no botao de adicionar
let buttonAdd = document.getElementsByClassName(`add`);
for (let ba = 0; ba < buttonAdd.length; ba++) {
    buttonAdd[ba].style.display=`none`;
}

//imagem de carrinho
let cartImg = document.getElementsByClassName(`cart`);

//imagem da comida
let img = document.getElementsByClassName(`img`);
for (let im = 0; im < img.length; im++) {
    img[im].style.display=`block`;
}

//para receber a mudança de número
let quantidade = document.getElementById(`quantidade`);

//para fazer a alteração de valores no carrinho
let conta = 0;


//mudança de botoes e alteracoes no carrinho
function buying(nmrBotao, valor, comida,operacao) {

    //faz a alteracao dos display e estilos ao clicar no botao de adicionar
    if (buttonSelect[nmrBotao-1].style.display === 'block') {
        //parte de ao clicar no botao de adicionar carrinho acontece isso
        buttonAdd[nmrBotao-1].style.display=`block`;
        img[nmrBotao-1].style.border = `2px solid #CD5E43`;
        quantidade.innerText ++;

        //botao de carrinho select some
        buttonSelect[nmrBotao-1].style.display = 'none';

    } else {
        //caso contrario
        buttonSelect[nmrBotao-1].style.display = 'block';
        buttonAdd[nmrBotao-1].style.display=`none`;
        img[nmrBotao-1].style.border = `none`;
    }

}

function operacao(operador,nmrBotao){
    let qtdItem = document.getElementsByClassName("number");
    let atual = parseInt(qtdItem.innerText);
    let total = parseInt(quantidade.innerText);

}