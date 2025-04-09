let bckg1 = document.getElementById(`desempenho`);

    bckg1.style.display=`block`;

let bckg2 = document.getElementById(`avaliado`);

    bckg2.style.display=`none`;

//adicionando os botões
let btns = document.getElementsByClassName(`btn`);
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "rgb(37, 45, 55)";
    }
//fim dos botões

let txt = document.getElementsById(`txt`);

//function pra seleção dos botões
function selecionei(valor){

    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "rgb(37, 45, 55)";
    }

    if(btns[valor].style.backgroundColor === "rgb(37, 45, 55)"){
        btns[valor].style.backgroundColor = "rgb(251, 116, 19)";
    }

    return;
}

txt.innerText = `Você selecionou ${valor+1} de 5`;


//function para enviar a avaliação
function enviado(){
    if (bckg1.style.display===`block`){
        bckg1.style.display=`none`;
        bckg2.style.display=`block`;
    }
    return;
}
enviado();
