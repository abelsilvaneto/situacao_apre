function busca(lista, valorProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valorProcurado) {
            return ++i; // retorna a posição onde encontrou
        }
    }
    return -1; // se não encontrar
}

function buscaLinear(){
                let numeros = [4, 8, 15, 16, 23, 42]; 
            let valor = Number(document.getElementById("valor").value);

            let pos = busca(numeros, valor);

            let res = document.getElementById("res7");

res.innerHTML = ""

            console.log(pos)
            console.log(numeros)
            if (pos !== -1) {
                res.innerHTML += "Valor encontrado na posição: " + pos;
                
            } else {
                res.innerHTML += "Valor não encontrado!";
                
            }
}
