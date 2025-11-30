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

        let cadastros = [];

        res.innerHTML = ""
        // Verifica se está vazio
        if (nome === "" || email === "" || idade === "") {
            res.innerHTML += "Preencha todos os campos!"
            return 
        }else {        
            res.innerHTML += `
            <h3>Dados Gravados:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Idade:</strong> ${idade}</p>
        `;
        cadastros.push({nome: nome, email: email, idade: idade});
        console.log(cadastros)
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
            res.innerHTML += "Digite d para descrescente ou c para crescente!"
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

function gera() {

    let res = document.getElementById("res4");

    res.innerHTML = "";
    let matriz = []; // Matriz principal

    // 3 linhas
    for (let i = 0; i < 3; i++) {

        let linha = []; // Cria uma nova linha

        // 3 colunas
        for (let j = 0; j < 3; j++) {

            // Número entre 1 e 20
            let numero = Math.floor(Math.random() * 20) + 1;

            linha.push(numero); // Coloca na linha
        }

        matriz.push(linha); // Coloca a linha na matriz
    }

    for (let i = 0; i < matriz.length; i++) {
    let linhaTxt = "";

    for (let j = 0; j < matriz[i].length; j++) {
        linhaTxt += matriz[i][j] + " ";   // monta a linha manualmente
    }

    res.innerHTML += `<strong>${linhaTxt}</strong><br>`;
}
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

    // Função para gerar 'qtde' números aleatórios de 1 a 20
function gerarNumeros(qtde) {


    let lista = [] // Array onde os números serão armazenados

    // Laço para gerar cada número
    for (let i = 0; i < qtde; i++) {
        // Gera número aleatório entre 1 e 20
        lista.push(Math.floor(Math.random() * 20) + 1)
    }

    return lista // Retorna o array pronto
}

// Função Bubble Sort para ordenar um array
function bubbleSort(arr) {

     let res = document.getElementById("res6");

    res.innerHTML = ""

    // Primeiro laço controla quantas "passadas" serão feitas
    for (let j = 0; j < arr.length - 1; j++) {

        // Segundo laço percorre o array comparando elementos vizinhos
        for (let i = 0; i < arr.length - j - 1; i++) {

        // Verifica se o elemento atual é maior que o próximo
        if (arr[i] > arr[i + 1]) {

        // Guarda o valor atual em uma variável temporária
        let temp = arr[i]

        // Troca os valores de posição
        arr[i] = arr[i + 1]
        arr[i + 1] = temp

        // Logs para mostrar cada troca ocorrendo
        console.log(arr) // mostra o array após a troca
        console.log(`arr[i] = ${arr[i]}`) // novo valor em arr[i]
        console.log(`-----------------------`)
        console.log(`temp (valor trocado) = ${temp}`) // valor que estava antes
        console.log(`-----------------------`)
        console.log(`arr[i+1] = ${arr[i + 1]}`) // novo valor em arr[i+1]
        console.log(`-----------------------`)
        }
    }
}

    return arr // Retorna o array ordenado
}

// Função principal do programa
function gerarBOB() {

     let res = document.getElementById("res6");

    res.innerHTML = ""

    // Gera um array com 10 números aleatórios de 1 a 20
    let arr = gerarNumeros(10)    

    // Ordena a lista usando Bubble Sort
    let ordenado = bubbleSort(arr)

    // Exibe a lista já ordenada
    res.innerHTML += `Números ordenados: ${ordenado} `;
}

