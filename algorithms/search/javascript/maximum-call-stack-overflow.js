let count = 0;
function recurse() {
    console.log(count);
    count++;
    recurse();
}

try {
    console.log('iniciando...')
    recurse()
} catch (e) {
    console.log(`Limite de pilha atingido em: ${count} chamadas.`)
}