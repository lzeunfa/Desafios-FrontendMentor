let buttonWaff = document.getElementById('buyWaff');
buttonWaff.style.backgroundColor = 'rgb(252, 249, 247)';
buttonWaff.style.display=`block`;

let cartwimg = document.getElementById(`cartw`);

//abaixo é o outro butão

let buttonAdd = document.getElementById(`add`);
buttonAdd.style.display=`none`;

function buying() {//Mudança de icons dos botões de compra

    if (buttonWaff.style.display === 'block') {
        buttonAdd.style.display=`block`;

        buttonWaff.style.display = 'none';

    } else {
        buttonWaff.style.display = 'block';
        buttonAdd.style.display=`none`;
    }
}


//Parte para adição dos produtos e preços
function increment(){

}

function deecrement(){

}
