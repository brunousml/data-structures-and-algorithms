/* A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

    function solution(X: number, Y: number, D: number): number;

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:
  X = 10
  Y = 85
  D = 30

the function should return 3, because the frog will be positioned as follows:

        after the first jump, at position 10 + 30 = 40
        after the second jump, at position 10 + 30 + 30 = 70
        after the third jump, at position 10 + 30 + 30 + 30 = 100

Write an efficient algorithm for the following assumptions:

        X, Y and D are integers within the range [1..1,000,000,000];
        X ≤ Y.

*/
// x = started position
// y = final position
// d = jump distance
function frogJump(x: number, y: number, d: number): number {
    // // arrange
    // let jumps = 0
    // let currPosition = x
    //
    // // moves until y
    // while (currPosition < y) {
    //     currPosition += d
    //     jumps++
    // }
    //
    // return jumps
    //
    return Math.ceil((y-x) / d)
}

// x = started position
// y = final position
// d = jump distance
const result1 = frogJump(10, 85, 30)
console.log('frogJump result: ', result1)
console.log('expected: ', 3 == result1)

const result2 = frogJump(10, 25, 30)
console.log('frogJump result: ', result2)
console.log('expected: ', 1 == result2)

const result3 = frogJump(1, 1000000, 1)
console.log('frogJump result: ', result3)
console.log('expected: ', 999999 == result3)