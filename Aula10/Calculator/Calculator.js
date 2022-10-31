function somar() {
    var tn1 = document.querySelector("#txtn1");
    var tn2= document.querySelector("#txtn2");
    var numero1 = Number(tn1.value);
    var numero2 = Number(tn2.value);

    var Soma = numero1 + numero2;
    
    resultado.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${Soma}`;
}