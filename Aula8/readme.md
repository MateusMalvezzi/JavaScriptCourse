- Relacionais
    - 5 > 2 → true
    - 7 < 4 → false
    - 8 >= 8 → true
    - 9  <= 7 → false
    - 5 == 5 → true
    - 4 != 4 → false
    - Exemplo
        - let a = 8
        let b = 15
        
        a <= b - 15
            - Quando temos operadores aritméticos e relacionais na mesma expressão, **primeiro**  fazemos os aritméticos
- Identidade
    - 5 == 5 → True.
    - 5 == ‘5’ → True (JS analisa que ambos tem o mesmo valor de gandez, 5).
    - 5 === ‘5’ → False (Tem o mesmo valor, mas são de tipos **diferentes**).
    - Exemplo
        - vax x = 5
        var y = ‘5’
            
            
            typeof x —> number
            typeof y —> string
            
            x == y —> true
            x === y —> false
            x != y —> false
            x !== y —> true 
            
- Lógicos
    - ! —> Negação
        - ! true → false
        - ! false → true
    - && —> Conjunção (E) (preciso de **tudo** verdadeiro)
        - true && true   → true
        - true && false  → false
        - false && true  → false
        - false && false → false
    - || —> Disjunção (OU) (basta que **uma** condição seja verdadeira)
        - true || true   → true
        - true || false  → true
        - false || true  → true
        - false || false → false
    - Exemplos
        - let a = 5
        - let b = 8
        - true $$ false —> false
        - true $$ true —> true
        - false || false —> false
        - true || false —> true
        - true || true —> true
        - a > b && b % 2 == 0 —> false
            - ordem de execução
                - aritméticos
                - relacionais
                - lógicos
        
             - a <= b || b / 2 == 2 —> true
        
- **Precedência**
    - ()  **  /
    - > < >=
    - !
    - &&
    - ||
- Ternário
    - Junta 3 operandos
    - Sempre o último a ser feito.
    - teste  ?  true  :  false
    - Exemplos
        - var media = 5.5
            
            média > 7 ? ‘aprovado’ : ‘reprovado’  —> reprovado 
            
            var res = 8
            var res = x % 2 == 0? 5 : 9
            
            res = 5