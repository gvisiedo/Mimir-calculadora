
document.querySelectorAll('.btn-numero').forEach(btn =>{
    btn.addEventListener('click', ()=> pulsarNumero(btn.textContent));
});
document.querySelectorAll('.btn-operador').forEach(btn =>{
    btn.addEventListener('click', ()=> pulsarOperador(btn.textContent));
});

document.querySelectorAll('.btn-igual').addEventListener('click', calcularResultado);
document.querySelectorAll('.btn-borrar').addEventListener('click', limpiar);




