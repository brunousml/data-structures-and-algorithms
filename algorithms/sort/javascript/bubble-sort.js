/**
 * Bubble Sort Implementation
 * 
 * Time Complexity: O(n^2)
 * - O algoritmo utiliza dois loops aninhados. No pior caso (array em ordem reversa), 
 *   realiza aproximadamente n(n-1)/2 comparações e trocas.
 * - Melhor caso: O(n) quando o array já está ordenado, graças à verificação da variável 'swapped'.
 * 
 * Space Complexity: O(1)
 * - Algoritmo "in-place": ordena o array original diretamente.
 * - Utiliza apenas uma quantidade constante de memória extra para variáveis auxiliares (swapped, temp, etc), 
 *   independente do tamanho do array de entrada.
 */
function bubbleSort(arr) {
    let arrayLength = arr.length

    console.log(`Iniciando ordenação do array: [${arr.join(', ')}]`);

    for (let round = 0; round < arrayLength; round++) {
        let swapped = false
        console.log(`\nIteração externa ${round + 1}:`);

        for (let current = 0; current < arrayLength - round - 1; current++) {
            const next = current + 1

            console.log(`  Comparando arr[${current}] (${arr[current]}) com arr[${next}] (${arr[next]})`);
            if (arr[current] > arr[next]) {
                // swap
                console.log(`    -> Trocando ${arr[current]} e ${arr[next]}`);
                const temp = arr[current]
                arr[current] = arr[next]
                arr[next] = temp

                swapped = true
                console.log(`    -> Estado atual: [${arr.join(', ')}]`);
            }
        }

        // If no two elements were swapped
        // by inner loop, then break
        if (swapped == false) {
            console.log("  Nenhuma troca realizada nesta iteração. Encerrando ordenação (array já está ordenado).");
            break
        }
    }
}

function generateRandomArray(length, min, max) {
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        randomArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArr;
}

// driver program
let arr
// arr = generateRandomArray(10, 1, 20000);
// arr = [1,2,4,5,6] // Melhor caso
arr = [9,8,7,6,5,4,3,2,1]
console.log("Array original:", ...arr)
bubbleSort(arr)

console.log("\nArray final ordenado:")
console.log(...arr)