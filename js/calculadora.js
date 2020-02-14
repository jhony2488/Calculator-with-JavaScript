// variavel  usada  para evitar que duas expressoes matematicas estejam juntas sem um numero no seu meio exemplo: +- ou /-
var validation = 0;
var tela = document.querySelector('.form-control');
// variavel que recebera o resultado da operação.
var resultado=0;
var contagem=0;
var resultadoSetado=0;
var telaTudo=0;
function calcular(tipo, valor) {
    telaTudo=tela.value;
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
      
        if(valor==='='&&contagem>=3){
            resultado=eval(tela.value);
            tela.value=resultado;
            validation=1;
            resultadoSetado=1;
            

        }
        }
contagem++;
    }
    else if (tipo === 'numero') {
        validation=0;
    if(validation==0){
        if(resultadoSetado>=1){
            tela.value = '';
            resultadoSetado=0;
        }
        tela.value += valor;
        validation=1;
        contagem++;
        }
           contagem++;
        }
}
