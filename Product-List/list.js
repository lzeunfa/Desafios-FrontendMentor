//botão de adicionar carrinho
let buttonSelect = document.getElementsByClassName('buy');
for (let i = 0; i < btns.length; i++) {
    buttonSelect[i].style.backgroundColor = 'rgb(252, 249, 247)';
    buttonSelect.style.display=`block`;
}

//botao que deve aparecer ao clicar no botao de adicionar
let buttonAdd = document.getElementsByClassName(`add`);
for (let i = 0; i < btns.length; i++) {
    buttonAdd[i].style.display=`none`;
}


//imagem de carrinho
let cartimg = document.getElementsByClassName(`cart`);

//imagem da comida
let img = document.getElementsByClassName(`img`);

//para receber a mudança de número
let quantidade = document.getElementById(`quantidade`);

function buying(nmrBotao, valor, comida) {//Mudança de icons dos botões de compra

    if (buttonSelect[nmrBotao-1].style.display === 'block') {
        buttonAdd.style.display=`block`;
        imgW.style.border = `3px solid #CD5E43`;

        buttonSelect[nmrBotao-1].style.display = 'none';

    } else {
        buttonSelect.style.display = 'block';
        buttonAdd.style.display=`none`;
    }
}
