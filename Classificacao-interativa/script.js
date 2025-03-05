let bckg1 = document.getElementById(`desempenho`);

    bckg1.style.display=`block`;

let bckg2 = document.getElementById(`avaliado`);

    bckg2.style.display=`none`;

//adicionando os botões
let av1 = document.getElementById(`btn1`);
    av1.style.backgroundColor=`#252D37`;

let av2 = document.getElementById(`btn2`);
    av2.style.backgroundColor=`#252D37`;

let av3 = document.getElementById(`btn3`);
    av3.style.backgroundColor=`#252D37`;

let av4 = document.getElementById(`btn4`);
    av4.style.backgroundColor=`#252D37`;

let av5 = document.getElementById(`btn5`);
    av5.style.backgroundColor=`#252D37`;
//fim dos botões

let txt = document.getElementById(`txt`);

//function para adaptação do tipo de cor hexadecimal para rgb
function rgbToHex(rgb) {
    var rgbValues = rgb.match(/\d+/g);
    return "#" + ((1 << 24) + (parseInt(rgbValues[0]) << 16) + (parseInt(rgbValues[1]) << 8) + parseInt(rgbValues[2])).toString(16).slice(1).toUpperCase();
}

//function pra seleção dos botões
function selecionei1(){
    if(rgbToHex(av1.style.backgroundColor) === `#252D37`){
        av1.style.backgroundColor = `#FB7413`;
        av2.style.backgroundColor = `#252D37`;
        av3.style.backgroundColor = `#252D37`;
        av4.style.backgroundColor = `#252D37`;
        av5.style.backgroundColor = `#252D37`;
        txt.innerText=`Você selecionou 1 de 5`;
    }
}

function selecionei2(){
    if(rgbToHex(av2.style.backgroundColor) === `#252D37`){
        av2.style.backgroundColor = `#FB7413`;
        av1.style.backgroundColor = `#252D37`;
        av3.style.backgroundColor = `#252D37`;
        av4.style.backgroundColor = `#252D37`;
        av5.style.backgroundColor = `#252D37`;
        txt.innerText=`Você selecionou 2 de 5`;
    }
}

function selecionei3(){
    if(rgbToHex(av3.style.backgroundColor) === `#252D37`){
        av3.style.backgroundColor = `#FB7413`;
        av1.style.backgroundColor = `#252D37`;
        av2.style.backgroundColor = `#252D37`;
        av4.style.backgroundColor = `#252D37`;
        av5.style.backgroundColor = `#252D37`;
        txt.innerText=`Você selecionou 3 de 5`;
    }
}

function selecionei4(){
    if(rgbToHex(av4.style.backgroundColor) === `#252D37`){
        av4.style.backgroundColor = `#FB7413`;
        av1.style.backgroundColor = `#252D37`;
        av2.style.backgroundColor = `#252D37`;
        av3.style.backgroundColor = `#252D37`;
        av5.style.backgroundColor = `#252D37`;
        txt.innerText=`Você selecionou 4 de 5`;
    }
}

function selecionei5(){
    if(rgbToHex(av5.style.backgroundColor) === `#252D37`){
        av5.style.backgroundColor = `#FB7413`;
        av1.style.backgroundColor = `#252D37`;
        av2.style.backgroundColor = `#252D37`;
        av3.style.backgroundColor = `#252D37`;
        av4.style.backgroundColor = `#252D37`;
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
