function insertionSort(arr) {
    console.log("Starting insertion sort with array:", arr);
    console.log("Array length:", arr.length);
    console.log("We will perform", arr.length - 1, "rounds");

    for (let round = 1; round < arr.length; round++) {

        console.log(`\n--- Round ${round} ---`);
        console.log(`  Current array state:`, arr);
        let roundValue = arr[round] // save the round value here

        console.log(`  Round value (element to insert): ${roundValue} at index ${round}`);
        let current = round - 1
        console.log(`  Starting comparison from index ${current}`);

        // Move elements of arr[0..i-1], that are greater than roundValue, to one position ahead
        // of their current position
        console.log(`  Comparing ${roundValue} with elements to the left...`);
        let moved = false;
        while (current >= 0 && arr[current] > roundValue) {
            console.log(`    ${arr[current]} > ${roundValue}? Yes`);
            console.log(`    Moving ${arr[current]} from position ${current} to position ${current + 1}`);
            arr[current + 1] = arr[current]
            current--
            moved = true;
            if (current >= 0) {
                console.log(`    Continue checking at index ${current}`);
            }
        }
        if (current >= 0) {
            console.log(`    ${arr[current]} > ${roundValue}? No`);
        }
        if (!moved) {
            console.log(`  No elements needed to be moved`);
        }
        arr[current + 1] = roundValue
        console.log(`  Inserting ${roundValue} at position ${current + 1}`);
        console.log(`  Array after round ${round}:`, arr);

    }
    console.log("\n=== Sorting Complete ===");
    console.log("Final sorted array:", arr);
}

// driver method
let arr
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
console.log(arr.join(" "))