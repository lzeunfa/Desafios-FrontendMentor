//botão
let buttonWaff = document.getElementById('buyWaff');
buttonWaff.style.backgroundColor = 'rgb(252, 249, 247)';
buttonWaff.style.display=`block`;

let cartwimg = document.getElementById(`cartw`);

//imagem da comida
let imgW = document.getElementById(`imgW`);
    imgW.style.transition = `ease 0.05s`;

//abaixo é o outro botão

let buttonAdd = document.getElementById(`add`);
buttonAdd.style.display=`none`;

//para receber a mudança de número
let quantidade = document.getElementById(`quantidade`);

function buying() {//Mudança de icons dos botões de compra

    if (buttonWaff.style.display === 'block') {
        buttonAdd.style.display=`block`;
        imgW.style.border = `3px solid #CD5E43`;

        buttonWaff.style.display = 'none';

        quantidade.innerText = `1`;

    } else {
        buttonWaff.style.display = 'block';
        buttonAdd.style.display=`none`;
    }
}


//Parte para adição dos produtos e preços
function increment(){
    
}

function decrement(){
    if (buttonWaff.style.display === 'block') {
        buttonAdd.style.display=`block`;

        imgW.style.border = `3px solid #CD5E43`;

        buttonWaff.style.display = 'none';

    } else {
        buttonWaff.style.display = 'block';

        buttonAdd.style.display=`none`;

        imgW.style.border = `none`;

        quantidade.innerText = `0`;
    }
}
