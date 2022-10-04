## AULA 09 Introduction to DOM

- DOM → Document Object Model
    - Conjunto de objetos dentro do seu navegador que dará acesso aos componentes internos do website.
- window é a *raiz*
    - Tudo do JS está dentro de um objeto window
- Árvore DOM
    - window
        - location → qual a localização do seu site
        - history → Registra de onde você veio e para onde vai
        - document
            - html
                - head
                    - meta
                    - title
                - body
                    - h1
                    - div
                    - p
                    - p
                        - strong
            
- Selecionando
    - por Marca
        - getElementsByTagName()
    - por ID
        - getElementsById()
    - por Nome
        - getElementsByName()
    - por Classe
        - getElementsByClassName()
    - por Seletor
        - **.querySelector (returns element)** → Retorna apenas um elemento.
        - **.querySelectorAll (returns NodeList)** → Retorna todos os elementos.
            
            ### **exemplos**:
            
            - querySelector(”.intercom-teste-xxx”) → pegando uma classe no CSS
            - querySelector(”#intercom-teste-xxx”) → pegando um ID no CSS
            - querySelector(”a”) → Retorna todos links que temos.
- innerText
    - Pega o texto sem as “filhas”, sem a formatação. Pega somente o texto.
- innerHTML
    - Pega o html inteiro, inclusive com as “tags filhas”.