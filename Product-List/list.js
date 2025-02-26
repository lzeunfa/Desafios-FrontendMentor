const buttonw = document.getElementById('buyw');
buttonw.style.backgroundColor = 'rgb(252, 249, 247)';
buttonw.style.display=`block`

const cartwimg = document.getElementById(`cartw`)

//abaixo é o outro butão

const buttonadd = document.getElementById(`add`)
buttonadd.style.display=`none`

function buying() {

    if (buttonw.style.display === 'block') {
        buttonadd.style.display=`block`

        buttonw.style.display = 'none'

    } else {
        buttonw.style.display = 'block'
        buttonadd.style.display=`none`
    }
}

function increment(){

}

function deecrement(){

}
