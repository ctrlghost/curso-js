function exemploSolicitarNomes(){
    // let indice = 0;
    // while(indice < 3){
    // let nome = prompt("Digite o nome");
    // indice = indice + 1;
    //}
    // for tem como objetivo de ir de um ponto até outro
    // for (variável; condiçâo; incrementar/decrementar)

    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome");
    }
}

function exemploApresentarSoma(){
    let soma = 0;
    for(let indice = 0; indice = 6; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número"))
        soma = soma + numero;
    }

    alert("Soma: " + soma);

}

function exemploContador(){
    let contador;
    for(contador = 0; contador <= 10; contador = contador + 1){
        alert(contaodr);
    }
    alert("Valor contador: " + contador)
}

function exemploContagemRegressiva(){
    for(let contador = 10; contador >= 0; contador = contador - 1){
        if(contador === 0){
            alert(contador)
        }
    }
}

function calcularQuantidadeCamisetasPorTamanho(){

    // Camisets P, M, G, G2
    let quantidadeP = 0, quantidadeM = 0, quantidadeG = 0, quantidadeG2 = 0;
    let quantidadeCamisetas = parseInt(prompt("Digite a quantidade de camisetas desejada"))
    for(let indice = 0; indice < quantidadeCamisetas; indice = indice + 1){
        let tamaho = prompt(
            "[" + (indice + 1) + "/" + quantidadeCamisetas + "] - Digite o tamanho da camiseta [P/M/G/G2]: ").toUpperCase().trim()

            while(tamanho !== "P" && tamanho !== "M" && tamanho !== "G" && tamanho !== "G2"){
                tamanho = prompt(
                    "Tamanho inválido.\n[" + (indice + 1) + "/" + quantidadeCamisetas + "] - Digite o tamanho da camiseta [P/M/G/G2]: ").toUpperCase().trim()
            }
            if(tamanho === "P"){
                quantidadeP = quantidadeP + 1;
            } else if(tamanho === "M"){
                quantidadeM = quantidadeM + 1;
            } else if(tamanho === "G"){
                quantidadeG = quantidadeG + 1;
            } else if (tamanho === "G2"){
                quantidadeG2 = quantidadeG2 + 1;
            }

    }
    alert(`Quantidade de camisetas por tamanho:
        P 0 ${quantidadeP}
        M - ${quantidadeM}
        G - ${quantidadeG}
        G2 - ${quantidadeG2}`)
}