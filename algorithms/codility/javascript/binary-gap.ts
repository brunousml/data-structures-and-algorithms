// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(N: number): number {
    // Implement your solution here

    // Convertion
    const binary = N.toString(2);
    // console.log(binary)

    // Arrange
    // max = maximum zeros found
    // count = to count the current round
    let maxZeros = 0, count = 0

    console.log(`\nlenght: ${binary.length}`)

    // Iterate over the binary
    for (let i=0; i < binary.length; i++) {
        const el = binary[i]
        console.log(`\nIndex: ${i}`)
        console.log(`\nelement: ${el}`)

        // set data when finding 1
        if(el == '1') {
            console.log('\nreset count')

            // if count is higher, set max
            if(count > maxZeros) {
                maxZeros = count
                console.log(`n new ma${maxZeros}`)
            }

            count = 0 // reset count
        }

        // count zeros
        if(el == '0') {
            console.log('\nincrement count')
            count++ // increment count
        }
    }
    console.log('\nshould return: ', maxZeros)

    // return the maximum
    return maxZeros
}



console.log(solution(9))