/* ➔ Nome; Idade; Peso; Sexo; Altura; Quantidade de gols marcados; Quantidade de cartões amarelos recebidos; Quantidade de cartões vermelhos recebidos;

 O jogador com o menor peso; XXX
O jogador com a maior altura; XXX
 O jogador com o maior nome; XXX
 A quantidade de jogadores do sexo F; XXX
 A quantidade de jogadores do sexo M; XXX
  O jogador com a menor quantidade de cartões amarelos recebidos; XXX
 O jogador com o menor nome; XXX
  O jogador com o maior peso; XXX
 O jogador com a maior quantidade de cartões vermelhos recebidos; XXX
O jogador com a maior quantidade de cartões amarelos recebidos; XXX
 O jogador com a menor quantidade de cartões vermelhos recebidos; XXX */

 function timeFutebol() {

    let indice = 0;

    // Variáveis de estatísticas (fora do loop)
    let nomeMaior = "";
    let nomeMenor = "";
    let tamanhoNomeMaior = 0;
    let tamanhoNomeMenor = Infinity;
    let alturaMaior = 0;
    let alturaMenor = Infinity;
    let pesoMaior = 0;
    let pesoMenor = Infinity;
    let totalM = 0;
    let totalF = 0;
    let maisAmarelo = 0;
    let menosAmarelo = Infinity;
    let maisVermelho = 0;
    let menosVermelho = Infinity;

    while (indice < 22) {
        let nome = prompt("Qual o nome do jogador?");
        let idade = parseInt(prompt("Qual a idade do jogador?"));
        let peso = parseInt(prompt("Qual o peso do jogador?"));
        let altura = parseFloat(prompt("Qual a altura do jogador?"));
        let sexo = prompt("Qual o sexo do jogador? (M/F)");
        let gols = parseInt(prompt("Quantos gols o jogador marcou?"));
        let cartasAmarelas = parseInt(prompt("Quantos cartões amarelos o jogador recebeu?"));
        let cartasVermelhas = parseInt(prompt("Quantos cartões vermelhos o jogador recebeu?"));

        // Comparações
        if (peso < pesoMenor) pesoMenor = peso;
        if (peso > pesoMaior) pesoMaior = peso;

        if (altura < alturaMenor) alturaMenor = altura;
        if (altura > alturaMaior) alturaMaior = altura;

        if (nome.length > tamanhoNomeMaior) {
            tamanhoNomeMaior = nome.length;
            nomeMaior = nome;
        }

        if (nome.length < tamanhoNomeMenor) {
            tamanhoNomeMenor = nome.length;
            nomeMenor = nome;
        }

        if (sexo.toUpperCase() === "M") totalM++;
        if (sexo.toUpperCase() === "F") totalF++;

        if (cartasAmarelas < menosAmarelo) menosAmarelo = cartasAmarelas;
        if (cartasAmarelas > maisAmarelo) maisAmarelo = cartasAmarelas;

        if (cartasVermelhas < menosVermelho) menosVermelho = cartasVermelhas;
        if (cartasVermelhas > maisVermelho) maisVermelho = cartasVermelhas;

        indice++;
    }

    // Exibir estatísticas
    console.log(
        "Jogador com o maior nome: " + nomeMaior +
        "\nJogador com o menor nome: " + nomeMenor +
        "\nJogador com o maior peso: " + pesoMaior +
        "\nJogador com o menor peso: " + pesoMenor +
        "\nJogador com a maior altura: " + alturaMaior +
        "\nJogador com a menor altura: " + alturaMenor +
        "\nQuantidade de jogadores do sexo M: " + totalM +
        "\nQuantidade de jogadores do sexo F: " + totalF +
        "\nMaior quantidade de cartões amarelos: " + maisAmarelo +
        "\nMenor quantidade de cartões amarelos: " + menosAmarelo +
        "\nMaior quantidade de cartões vermelhos: " + maisVermelho +
        "\nMenor quantidade de cartões vermelhos: " + menosVermelho
    );
}
