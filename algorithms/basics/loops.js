console.log('\n---\n');

// for loop
console.log('for loop');
for (let i= 1; i <=3; i++) {
    console.log('Count: ', i);
}

console.log('\n---\n');

// for in loop
console.log('for in loop')
const person = { name: 'Alice', age: 22, city: 'Delhi'};
for (let key in person) {
    console.log(key, ':', person[key]);
}

console.log('\n---\n');

// for each loop
console.log('for each loop');
const numbers = [10, 20, 30];
numbers.forEach( (number) => console.log(number));

console.log('\n---\n');

// while loop
console.log('while loop');
let i = 0;
while(i < 3) {
    console.log('Number: ', i);
    i++;
}

console.log('\n---\n');

// do-while loop
console.log('do-while loop');
let a = 0;
do {
    console.log('Iteration: ', a);
    a++;
} while (a < 3);
