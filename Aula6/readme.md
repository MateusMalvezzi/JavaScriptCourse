## AULA 06 Data Handling

- Agora o objetivo é que o window.prompt ARMAZENE o valor que o user inserir.

```jsx
var nome = window.prompt('Qual seu nome?')

window.alert('É um prezer conhecê-lo, ' + nome); 

O + está servindo para concatenar.
```

- Exercicio

```jsx
var numero1 = window.prompt('Digite um número?')
 var numero2 = window.prompt('Digite outro número?')

 var soma = numero1 + numero2;

 var result = window.alert('A soma dos valores é,' + soma)
```

- Window.prompt recebe os valores em STRING, sendo assim, quando o valor de ***soma*** for aparecer, virá como string e não number. Teremos que convertê-lo.
    - **Conversão STRING → NUMBER**
        - Número inteiro
            - **Number.parseInt(n)**
        - Número real
            - **Numer.parseFloat(n)**
        - Ou posso utilizar apenas  “**Number(n)**” e deixar o JS decidir. (Jeito mais utilizado)
        
        ```jsx
        Número  INTEIRO
        var numero1 = Number.parseInt(window.prompt('Digite um número?'))
        var numero2 = Number.parseInt(window.prompt('Digite outro número?'))
        
        var soma = numero1 + numero2;
        
        var result = window.alert('A soma dos valores é, ' + soma)
        
        Número REAL
        var numero1 = Number.parseFloat(window.prompt('Digite um número?'))
        var numero2 = Number.parseFloat(window.prompt('Digite outro número?'))
        
        var s = numero1 + numero2;
        
        var result = window.alert('A soma dos valores é, ' + soma)
        
        ```
        
    - **Conversão NUMBER → STRING**
        - Sting(n)
        - n.toSring()
- **Formatação de strings**
    
    ```jsx
    var s = 'JavaScript'
    'Eu estou aprendendo s' // Não faz interpolação.
    'Eu estou aprendendo' + s // Usa concatenação.
    `Eu estou aprendendo ${s}` // Usa template string
    ```
    
    - s.length → **Tamanho** da string (quantos caracteres a string possui).
    - s.toUpperCase() → Colocar tudo em ‘maiúsculas’.
    - s.toLowerCase() → Colocar tudo em ‘minúsculas’
- **Formatação de números**

```jsx
var n1 = 1543.5

n1 > 1545.5

n1.toFixed(2) > '1545.50'

n1.toFixed(2).replace('.' , ',') > Trocarei os pontos por virgulas.

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) > 'R$ 1,545.50'
```