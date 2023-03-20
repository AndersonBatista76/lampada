var lamp = window.document.getElementById('lampada')

function Esta_quebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!Esta_quebrada()){
    lamp.src = 'assets/images/ligada.svg'}
}

function Desligar() {
    if (!Esta_quebrada()){
    lamp.src = 'assets/images/desligada.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar() {
    lamp.src = 'assets/images/quebrada.svg'
}