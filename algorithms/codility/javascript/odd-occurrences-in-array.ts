// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
//
//      For example, in array A such that:
//      A[0] = 9  A[1] = 3  A[2] = 9
//      A[3] = 3  A[4] = 9  A[5] = 7
//      A[6] = 9
//
// the elements at indexes 0 and 2 have value 9,
//     the elements at indexes 1 and 3 have value 3,
//     the elements at indexes 4 and 6 have value 9,
//     the element at index 5 has value 7 and is unpaired.
//
//     Write a function:
//
//     function solution(A: number[]): number;
//
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
//
//      For example, given array A such that:
//      A[0] = 9  A[1] = 3  A[2] = 9
//      A[3] = 3  A[4] = 9  A[5] = 7
//      A[6] = 9
//
// the function should return 7, as explained in the example above.
//
//     Write an efficient algorithm for the following assumptions:
//
//     N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.
//

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    // Implement your solution here

    // Codex version
    /*
        O símbolo `^` em JavaScript/TypeScript é o operador **XOR bit a bit**.

        XOR significa “exclusive OR”, ou “OU exclusivo”. Ele compara dois números em binário, bit por bit.

        Regra básica:

        ```txt
        0 ^ 0 = 0
        1 ^ 1 = 0
        0 ^ 1 = 1
        1 ^ 0 = 1
        ```

        Ou seja:

        ```txt
        bits iguais     => 0
        bits diferentes => 1
        ```

        Exemplo:

        ```ts
        const result = 5 ^ 3;
        ```

        Em binário:

        ```txt
        5 = 101
        3 = 011
        ```

        Comparando bit a bit:

        ```txt
          101
        ^ 011
        = 110
        ```

        `110` em binário é `6`, então:

        ```ts
        console.log(5 ^ 3); // 6
        ```

        No problema do elemento sem par, usamos `^` porque:

        ```ts
        x ^ x === 0
        x ^ 0 === x
        ```

        Então os números repetidos em pares se “cancelam”, e sobra apenas o número que aparece uma vez.
     */
    let result = 0;

    for (const value of A) {
        result ^= value;
    }

    return result;

    // My version
    // let countOcc = [], odd, last
    // for (let index in A) {
    //     const currValue = A[index]

    //     // console.log("index: ", index)
    //     // console.log("value: ", A[index])
    //     // console.log("countOcc: ", countOcc[currValue])
    //     // console.log("countOcc: ", countOcc[currValue])

    //     if(!countOcc[currValue]){
    //         countOcc[currValue] = 1
    //         odd = currValue
    //         continue
    //     }

    //     countOcc[currValue]++
    //     odd
    // }

    // for(let el in countOcc) {
    //     // console.log("el: ", el)
    //     // console.log("countOcc[el]: ", countOcc[el])
    //     // console.log("countOcc[el] % 2: ", countOcc[el] % 2)

    //     if(countOcc[el] % 2 == 1)
    //         return parseInt(el)
    // }
}

