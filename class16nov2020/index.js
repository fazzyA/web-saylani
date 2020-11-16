// arrow functions
//filter method
// map method
//local global scope
// variables
//find
// destructuring
var a = 10 ; //global

function hello(){
      var a = 5;
    console.log(`hello world`);
    console.log(a);
}

console.log(a); // 10

hello();
console.log(a); 
var i = 20;
////let
for (let i = 0; i < 10; i++) {
    console.log(i); 
}
console.log(i,"faiza")
// if( true ){
//     let x=1;
// }
// console.log(x) //undefined  ref error
let x = 1;   //1 
// switch(x) {
//   case 0:
//     var foo;
//     break;
    
//   case 1:
//     var foo; 
//     break;
// }

const arr = [1,2,3,4,5];
// arr = [12,13];

//  function do_something() {
//         // console.log(bar); 
//      foo = 2;
    
//       console.log(foo); 
//       var foo;
//       // var bar = 1;
//       }
//  do_something()
      function test(){
            var foo = 33; //foo =>test
            if(foo) {
               let foo = (2 + 55); //if
            }
            return foo
         }
         var foo  = test();
         console.log(foo);  // ref error
// for
