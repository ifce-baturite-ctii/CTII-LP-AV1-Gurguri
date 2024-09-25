function contarVogais(frase) {
    let contador = 0;
    frase = frase.toLowerCase();
    let vogais = new Set();
    vogais.add('a');
    vogais.add('e');
    vogais.add('ê');
    vogais.add('i');
    vogais.add('o');

    for(let letra of frase) {
        if (vogais.has(letra)) {
            contador++;
        }
    }
    return contador;
}

module.exports = {contarVogais}