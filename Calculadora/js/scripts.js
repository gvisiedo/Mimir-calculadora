let pantalla = '0';
let numAnterior = null;
let operacion = null;
let esperandoSegundoNum = false;

const display = document.querySelector('.pantalla');

document.querySelectorAll('.btn-numero').forEach(btn =>{
    btn.addEventListener('click', ()=> pulsarNumero(btn.textContent));
});
document.querySelectorAll('.btn-operador').forEach(btn =>{
    btn.addEventListener('click', ()=> pulsarOperador(btn.textContent));
});

document.querySelector('.btn-igual').addEventListener('click', calcularResultado);
document.querySelector('.btn-borrar').addEventListener('click', limpiar);


function pulsarNumero(num){
    display.textContent= num;
};

function pulsarOperador(op){
    document.getElementsByClassName(".btn-numero") + document.getElementsByClassName(".btn-operador")

}
function calcularResultado(){}

function limpiar(){
    pantalla = '0';
    numAnterior = null;
    operacion = null;
    esperandoSegundoNum = false;
    display.textContent = '0';
}


