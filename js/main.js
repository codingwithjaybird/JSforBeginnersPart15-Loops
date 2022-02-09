/*

LOOPS:

Loops check a condition and run the code block if it is true. 
The condition is checked again and runs the code block again if it's true.
This cycle repeats until the condition is no longer true and returns a false.

   There are 3 common loops in JS:
      1. For Loop (most common loop). 
      2. While Loop
      3. Do While Loop
*/


// 1. FOR Loop

for (let i = 0; i < 3; i++) {
   console.log('For Loop number: ' + i);
}

let stationary = ['pens', 'pencils', 'erasers', 'rulers'];

for (let a = 0; a < stationary.length; a++) {
   console.log(stationary[a]);
}

// 2. WHILE Loop

let i = 1;  // Set the counter to 1

while ( i < 7 ) {
   console.log('While loop runs ' + i + ' times');
   i++;
}

// 3. DO WHILE Loop

let j = 1; // Set the counter to 1

do {
   console.log(j + ' x 2 = ' + j*2);
   j++;
} while ( j < 10 );

let x = 1; // Set the counter to 1

do {
   console.log('Do While Loop number: ' + x);
   x++;
} while ( x < 1 );

// NOTE that the loop runs once before it checks the condition.