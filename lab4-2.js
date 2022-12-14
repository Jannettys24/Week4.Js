// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// if ( a < b) {
// console.log(true); true
// }else {
// console.log(false);
// }

// //
// if (c > d) {
// console.log(true); true
// }else {
// console.log( false);
// }
// console.log (a < b); true
// console.log (c > d); true
// console.log('name'==='name'); true

// // FOR THE NEXT TWO, USE ONLY && OR //
// console.log(true || false); true
// console.log(false && false && false && false && false || true);
// console.log(false || false)
// console.log(e ='Kevin');
// console.log(a < b != c);  // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a = a !=d ); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// // D. The Farm //
// let animal = "chicken"
// if (animal==='cow') {
//     console.log( "moooo")
// } else {
//  console.log ("Hey you are not a cow")
    
// }

//   E. Driver's Ed

//   Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
//if (age >= 16) {
 // console.log("Here are the keys!");
//} else {
  //  console.log("Sorry, you're too young.")
//}  


nes (66 sloc)  1.96 KB

// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
// const cat1 = {
//     name: "Tommy",
//     breed: "Domestic Shorthair",
//     age: 1
// }
// console.log(cat1.age);
// console.log(cat1.breed);

// Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
    name: "Jerry",
    breed: "American Shorthair",
    age: 2
}

/*3. Combine Cats!
The cats are multiplying!
Write a function combineCatsthat has two parameters mama, and papa. 
The function will take two arguments -- each a cat object.
Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.*/
// function combineCats(argueX, argueY) {
//     console.log(argueX);
//     console.log(argueY);
// }
// console.log(combineCats(cat1, cat2))

// function combineTwoCats(argue1, argue2) {
//     return {
//     name: argue1.name + argue2.name,
//     breed: argue1.breed + " - " + argue2.breed,
//     age: 1
// } 
//     }
    
// console.log(combineTwoCats(cat1, cat2));

// 4. Cat brain bender
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
// console.log(combineTwoCats(
//         combineTwoCats(cat1, cat2),
//         combineTwoCats(cat1, cat2)
//     )
// );
// console.log(combineTwoCats(combineTwoCats(cat1, cat2), combineTwoCats(cat1, cat2)));

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
// console.log(combineTwoCats(
//     combineTwoCats(
//      combineTwoCats(
//         combineTwoCats(cat1, cat2),
//         combineTwoCats(cat1, cat2),
//         ),
//         combineTwoCats(
//             combineTwoCats(cat1, cat2),
//             combineTwoCats(cat1, cat2) 
//         )
//     )
// )
// );

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i <= 10; i++) {
// console.log(i);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
// console.log(i);
// }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3) {
// console.log(i);
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 1; i <= 100; i++) {
// if (i % 2 == 0) {
//     console.log(i + "<-- is an even number")
// } else if (i % 2 != 0) {
//     console.log(i)
// }
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let i = 0; i <= 100; i++) {
// if (i % 5 === 0 && i % 3 != 0) {
//     console.log("I found a " + i +"." + " High five!");
// }
// //     // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//     else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log("I found a " + i +"." + " Three is a crowd!");
// } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log("I found a " + i +"." + " High five! Three is a crowd!")
// }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account = 0
// for (let i = 0; i <= 10; i++) {
//     bank_account += i;
//     console.log(bank_account);
//     
//     }

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0
for (let i = 1; i <= 100; i++) {
    bank_account += (i * 2);
    console.log(bank_account);
    }
if (bank_account = 10,100) {
    console.log("I'm rich!");
}