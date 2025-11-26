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