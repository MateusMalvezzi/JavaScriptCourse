function Calcular(){
    let txtv = document.querySelector('#txtvel')
    let res = document.querySelector('#res')
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de  <strong>${vel} KM/H</strong></p>`
    if(vel >= 60){
        res.innerHTML = `<p>Sua velocidade é de <strong>${vel} KM/H</strong> e está acima do permitido. <strong>Multado.</strong></p>`
    }else{
        res.innerHTML = `<p>Sua velocidade é de <strong>${vel} KM/H</strong> e de acordo com a via.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`

}