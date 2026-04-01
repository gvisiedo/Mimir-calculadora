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
    
    if(esperandoSegundoNum){
        //reemplaza: pantalla es el nuevo dígito
        pantalla = num;
        esperandoSegundoNum = false;
    }else{
        //acumula: si pantalla es '0' reemplaza si no concatena
        pantalla = pantalla === '0'? num :pantalla +num;
    }
    //actualiza lo que se ve
    display.textContent = pantalla
};

function pulsarOperador(op){
    
    numAnterior = pantalla; //guarda el numero actual
    operacion = op;   // guarda +,-,* o /
    esperandoSegundoNum = true; // el próximo número empieza de cero

}
function calcularResultado(){
    if(operacion === '+'){
        resultado = Number(numAnterior)+Number(pantalla); 
    }else if(operacion === '-' ){
        resultado = Number(numAnterior)-Number(pantalla); 
        
    }else if(operacion === '*'){
        resultado = Number(numAnterior)*Number(pantalla); 

    }
    else if(operacion === '/'){
        if(pantalla === '0'){
            display.textContent = "Error: división entre 0";
            pantalla= '0';
            numAnterior=null;
            operacion=null;
            return //sale de la función sin seguir

        }
            resultado = Number(numAnterior)/Number(pantalla); 

    };
    display.textContent = resultado;
    pantalla = String(resultado);
    numAnterior = null;
    operacion = null;
}

function limpiar(){
    pantalla = '0';
    numAnterior = null;
    operacion = null;
    esperandoSegundoNum = false;
    display.textContent = '0';
}


