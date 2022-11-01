function somar() {
    var tn1 = document.getElementById("txtn1");
    var tn2= document.getElementById("txtn2");
    var numero1 = Number(tn1.value);
    var numero2 = Number(tn2.value);

    var Soma = numero1 + numero2;
    
    resultado.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${Soma}`;
}
//I made the modification to getElementById because after some research I saw that it is the best model.  Also because, using ID, it will already be indexed, so it won't be necessary to "go through" the entire DOM to find what gives "match".