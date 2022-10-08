var area = document.querySelector("#area")
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)


function clicar() {
    area.innerText = 'Olá!'
}

function sair(){
    area.innerText = 'Interaja'
}

function entrar(){
    area.innerText = 'Clique'
}