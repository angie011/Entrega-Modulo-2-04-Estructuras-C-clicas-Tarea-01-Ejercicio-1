let posNumero = 0;

for(let i=1;i<=15;i++){
    num=Number(prompt('Ingrese el número ' + i));
    if(num>=0){
        alert('Debe ingresar un número negativo.');
        num=Number(prompt('Ingrese el número ' + i));
    }
    posNumero = Math.abs(num);
    console.log(`Número ingresado: ${num}. Convertido a positivo: ${posNumero}`);
}