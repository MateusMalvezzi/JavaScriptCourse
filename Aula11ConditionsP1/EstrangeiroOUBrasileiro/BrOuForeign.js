function verificar(){
    let txtv = document.querySelector('#txt')
    let res = document.querySelector('#res')
    let pais = String(txtv.value)
    if( pais.value == 'brasil', 'Brasil'){
        res.innerHTML = `Vivendo em ${pais}, você é brasileiro`
    }else{
        res.innerHTML = `Vivendo em ${pais}, você é estrangeiro`
    }

} 