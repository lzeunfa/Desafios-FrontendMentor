let bckg1 = document.getElementById(`desempenho`);

    bckg1.style.display=`block`;

let bckg2 = document.getElementById(`avaliado`);

    bckg2.style.display=`none`;

//adicionando os botões
let av1 = document.getElementById(`btn1`);
    av1.style.backgroundColor="rgb(37, 45, 55)";

let av2 = document.getElementById(`btn2`);
    av2.style.backgroundColor="rgb(37, 45, 55)";

let av3 = document.getElementById(`btn3`);
    av3.style.backgroundColor="rgb(37, 45, 55)";

let av4 = document.getElementById(`btn4`);
    av4.style.backgroundColor="rgb(37, 45, 55)";

let av5 = document.getElementById(`btn5`);
    av5.style.backgroundColor="rgb(37, 45, 55)";
//fim dos botões

let txt = document.getElementById(`txt`);

//function pra seleção dos botões
function selecionei1(){
    if(av1.style.backgroundColor === "rgb(37, 45, 55)"){
        av1.style.backgroundColor = "rgb(251, 116, 19)";
        av2.style.backgroundColor = "rgb(37, 45, 55)";
        av3.style.backgroundColor = "rgb(37, 45, 55)";
        av4.style.backgroundColor = "rgb(37, 45, 55)";
        av5.style.backgroundColor = "rgb(37, 45, 55)";
        txt.innerText=`Você selecionou 1 de 5`;
    }
}

function selecionei2(){
    if(av2.style.backgroundColor === "rgb(37, 45, 55)"){
        av2.style.backgroundColor = "rgb(251, 116, 19)";
        av1.style.backgroundColor = "rgb(37, 45, 55)";
        av3.style.backgroundColor = "rgb(37, 45, 55)";
        av4.style.backgroundColor = "rgb(37, 45, 55)";
        av5.style.backgroundColor = "rgb(37, 45, 55)";
        txt.innerText=`Você selecionou 2 de 5`;
    }
}

function selecionei3(){
    if(av3.style.backgroundColor === "rgb(37, 45, 55)"){
        av3.style.backgroundColor = "rgb(251, 116, 19)";
        av1.style.backgroundColor = "rgb(37, 45, 55)";
        av2.style.backgroundColor = "rgb(37, 45, 55)";
        av4.style.backgroundColor = "rgb(37, 45, 55)";
        av5.style.backgroundColor = "rgb(37, 45, 55)";
        txt.innerText=`Você selecionou 3 de 5`;
    }
}

function selecionei4(){
    if(av4.style.backgroundColor === "rgb(37, 45, 55)"){
        av4.style.backgroundColor = "rgb(251, 116, 19)";
        av1.style.backgroundColor = "rgb(37, 45, 55)";
        av2.style.backgroundColor = "rgb(37, 45, 55)";
        av3.style.backgroundColor = "rgb(37, 45, 55)";
        av5.style.backgroundColor = "rgb(37, 45, 55)";
        txt.innerText=`Você selecionou 4 de 5`;
    }
}

function selecionei5(){
    if(av5.style.backgroundColor === "rgb(37, 45, 55)"){
        av5.style.backgroundColor = "rgb(251, 116, 19)";
        av1.style.backgroundColor = "rgb(37, 45, 55)";
        av2.style.backgroundColor = "rgb(37, 45, 55)";
        av3.style.backgroundColor = "rgb(37, 45, 55)";
        av4.style.backgroundColor = "rgb(37, 45, 55)";
        txt.innerText=`Você selecionou 5 de 5`;
    }
}


//function para enviar a avaliação
function enviado(){
    if (bckg1.style.display===`block`){
        bckg1.style.display=`none`;
        bckg2.style.display=`block`;
    }
}
