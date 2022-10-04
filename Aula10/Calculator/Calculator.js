function somar() {
    var tn1 = document.querySelector("#txtn1");
    var tn2= document.querySelector("#txtn2");
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var Ss = n1 + n2;
    
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${Ss}`;
}