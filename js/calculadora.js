// variavel  usada  para evitar que duas expressoes matematicas estejam juntas sem um numero no seu meio exemplo: +- ou /-
var validation = 0;
var tela = document.querySelector('.form-control');
// variavel que recebera o resultado da operação.
var resultado=0;
var contagem=0;

function calcular(tipo, valor) {
    if (tipo === 'açao') {
        if (valor == 'c') {
            tela.value = '';
              validation=0;
        }
        if(validation==1&&contagem>=1){
        
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            tela.value += valor;
            validation=0;
        } 
        if(valor==='='){
            resultado=eval(tela.value);
            tela.value=resultado;
            validation=1;

        }
        }

    }
    else if (tipo === 'numero') {
        validation=0;
    if(validation==0){
        tela.value += valor;
        validation=1;
        contagem++;
        }
           
        }
}
