"use strict";
// // const myName = "mubashir"; // top level code
// // const myName = "mubashir";

// // let myName = "mubashir";
// // function first() {
// //   let age = 30;
// //   if (age >= 30) {
// //     var decade = 3;
// //     var millineum = true;
// //     console.log(age);
// //   }

// //   const second = function () {
// //     const job = "teacher";
// //     console.log(myName + "," + millineum + "," + job + decade);
// //   };
// //   second();

// //   console.log(millineum);
// // }

// // first();
// let myName = "mubashir";
// function first() {
//   const mar = function () {
//     let age = 30;
//     var decade = 3;
//     var millineum = true;
//   };
//   mar();
//   const second = function () {
//     const job = "teacher";
//     console.log(myName + "," + "," + job + decade);
//   };
//   second();

//   console.log(millineum);
// }

// first();

// // function acc() {
// //   let x = 95;

// //   function works() {
// //     const y = 2;
// //     var num = 3;
// //     console.log(num);
// //   }
// //   w
// // }

// // acc();

// const a = "jonas";

// function firstFunction() {
//   const b = "hello";

//   //   console.log(c);
//   function secondFunction() {
//     var c = "hi";
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   secondFunction();
//   console.log(c);
// }

// firstFunction();

// const myName = "mubashir";

// function first() {
//   const age = 40;

//   function second() {
//     var job = "teacher";
//   }
//   second();
//   console.log(job);
// }
// first();

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  let firstName = "ali";

  const printAge = function () {
    let firstName = "ahsin";
    let output = `${firstName},your age is ${age} born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1990) {
      var milinium = true;
      let firstName = "yasir";
      const str = `oh you are milinium" ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      let output = "NEW OUTPUT";
      add(2, 3);
      console.log(output);
    }

    console.log(milinium);
  };

  printAge();

  return age;
}

const firstName = "mubashir"; // top level code
calcAge(1994);
