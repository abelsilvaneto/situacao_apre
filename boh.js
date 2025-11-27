        function calcular() {
            let V = Number(document.getElementById("tensao").value);
            let I = Number(document.getElementById("corrente").value);
            let R = Number(document.getElementById("resistencia").value);

            let res = document.getElementById("res");

            // Cálculos possíveis:
            // V = I * R
            // I = V / R
            // R = V / I

            res.innerHTML = ""

            if (V === 0 && I > 0 && R > 0) {
                V = I * R;
                res.innerHTML += `Tensão calculada: <strong>${V} V</strong>`;
            }
            else if (I === 0 && V > 0 && R > 0) {
                I = V / R;
                res.innerHTML += `Corrente calculada: <strong>${I} A</strong>`;
            }
            else if (R === 0 && V > 0 && I > 0) {
                R = V / I;
                res.innerHTML += `Resistência calculada: <strong>${R} Ω</strong>`;
            }
            else {
                res.innerHTML += "Preencha exatamente dois valores para calcular o terceiro!";
            }
        }


            function calcularPotencia() {
        let V = Number(document.getElementById("tensao").value);
        let I = Number(document.getElementById("corrente").value);
        let R = Number(document.getElementById("resistencia").value);

        let res = document.getElementById("res");

        res.innerHTML = ""

        if (V > 0 && I > 0) {
            let P = V * I;
            res.innerHTML += `Potência calculada: <strong>${P} W</strong>`;
        }
        else if (V > 0 && R > 0) {
            let P = (V * V) / R;
            res.innerHTML += `Potência calculada: <strong>${P} W</strong>`;
        }
        else if (I > 0 && R > 0) {
            let P = (I * I) * R;
            res.innerHTML += `Potência calculada: <strong>${P} W</strong>`;
        }
        else {
            res.innerHTML += "Preencha dois valores para calcular a potência!";
        }
    }

    function gravarDados() {
        let nome = document.getElementById("nome").value
        let email = document.getElementById("email").value
        let idade = document.getElementById("idade").value
        
        let res = document.getElementById("res")

        let arrN = []
        let arrE = []
        let arrI = []

        res.innerHTML = ""
        // Verifica se está vazio
        if (nome === "" || email === "" || idade === "") {
            res.innerHTML += "Preencha todos os campos!"
        }else {        
            res.innerHTML += `
            <h3>Dados Gravados:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Idade:</strong> ${idade}</p>
        `;
    }
    }

    function ver(){
        let ordem = document.getElementById("ordem").value
        let res = document.getElementById("res")

console.log(ordem)

        res.innerHTML = ""

        if(ordem === "crescente"){
            for (let i = 1; i <= 20; i++) {
        res.innerHTML += `${i} `
            }
        }else if(ordem === "decrescente"){
            for (let i = 20; i >= 1; i--) {
        res.innerHTML += `${i} `
            }
        }else if(ordem === "c"){
            for (let i = 1; i <= 20; i++) {
        res.innerHTML += `${i} `
            }
        }else if(ordem === "d"){
            for (let i = 20; i >= 1; i--) {
        res.innerHTML += `${i} `
            }
        } else if(ordem === "C"){
            for (let i = 1; i <= 20; i++) {
        res.innerHTML += `${i} `
            }
        }else if(ordem === "D"){
            for (let i = 20; i >= 1; i--) {
        res.innerHTML += `${i} `
            }
        }else{
            res.innerHTML += "Digite d para descrescente e c para crescente!"
        }
    }

    function calcularTEMPERATURA(){
        let c = Number(document.getElementById("c").value);
        let f = Number(document.getElementById("f").value);


        let res = document.getElementById("res2");

console.log(c, f)

        res.innerHTML = ""

        if (c === 0 && f > 0) {
            c = (f - 32) * 5/9
            res.innerHTML += `celsius calculado: <strong>${c} °C</strong>`;
        }
        else if (f === 0 && c > 0) {
            f = (c * 9/5) + 32
            res.innerHTML += `fahrenheit calculado: <strong>${f} °F</strong>`;
        }
        else {
            res.innerHTML += "Preencha exatamente um valores para calcular o segundo!";
        }
    }



    function calcularIMC(){
        let altura = Number(document.getElementById("altura").value);
        let peso = Number(document.getElementById("peso").value);


        let res = document.getElementById("res3");



const imc = peso / (altura * altura);

        res.innerHTML = ""

        if (peso > 0 && altura > 0) {
            res.innerHTML += `imc calculado: <strong>${imc.toFixed(2)}</strong>`;
        }

        if(imc < 18.5){
            res.innerHTML += `<p>Classificação: Abaixo do peso</p>`;
        }
        else if(imc >= 18.5 && imc < 24.9){
            res.innerHTML += `<p>Classificação: Peso normal</p>`;
        }
        else if(imc >= 25 && imc < 29.9){
            res.innerHTML += `<p>Classificação: Sobrepeso</p>`;
        }
        else if(imc >= 30 && imc < 34.9){
            res.innerHTML += `<p>Classificação: Obesidade grau I</p>`;
        }
        else if(imc >= 35 && imc < 39.9){
            res.innerHTML += `<p>Classificação: Obesidade grau II</p>`;
        }
        else if(imc >= 40){
            res.innerHTML += `<p>Classificação: obesidade graus III</p>`
        }

        else {
            res.innerHTML += "Preencha exatamente os valores para calcular o IMC!";
        }
    }

    function gera(){

        let res = document.getElementById("res4");

        res.innerHTML = ""
        let matriz = [[]]; // Array principal que vai armazenar as 3 linhas

        // Laço externo: controla as 3 linhas da matriz
        for (let i = 0; i < 3; i++) {
    
            matriz = []; // Cria uma nova linha vazia
    
            // Laço interno: controla as 3 colunas da matriz
            for (let j = 0; j < 3; j++) {
    
                // Gera um número aleatório entre 1 e 20
                let numero = Math.floor(Math.random() * 20) + 1;
    
                linha.push(numero); // Coloca o número dentro da linha
            }
    
            matriz.push(linha); // Adiciona a linha completa dentro da matriz
        }
    
        return matriz; // Retorna a matriz final com 3 linhas e 3 colunas
    }
    

    function geraesoma(){

        let res = document.getElementById("res5");

        res.innerHTML = ""

        let lista = []; // Array para armazenar os números gerados
        let soma = 0;   // Variável onde será acumulada a soma dos números
    
        // Laço que gera 10 números aleatórios
        for (let i = 0; i < 10; i++) {
    
            // Gera um número inteiro de 1 a 220
            let num = Math.floor(Math.random() * 220) + 1;
    
            lista.push(num); // Coloca o número dentro do array
            soma += num;     // Soma o número ao total acumulado
        }
    
        // Exibe no console a lista completa de números gerados
    
    
    
    res.innerHTML += `Números gerados: ${lista} `;

    
    res.innerHTML += `Soma total: ${soma} `;

    }
