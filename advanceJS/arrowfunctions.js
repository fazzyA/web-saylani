// // arrow function

// // function sum(){
// //     var c = 2+2;
// //     console.log(c)
// // }
// const sum = () => {
//     var c = 2+2;
//     console.log(c)
// }
// sum()
// const subtract = () => {
//     var c = 2 - 2;
//     console.log(c)
  
// }
// subtract()


// sum();
// // function sum2(a=0, b=0){
// //     var c = a + b;
// //     console.log(c)
// // }

// const sum2 = (a=0,b=0) => {
//     var c = a + b;
//     console.log(c)
  
// }
// sum2();
// // function sum3(a=0, b=0){
// //     var c = a + b;
// //     return c
// // }
// // var a =  sum3(2,5)

// const sum3 = (a=0, b=0) =>
// {
//     var c = a + b;
//     return c

// }
// // console.log(sum3(2,2))
// var a =  sum3(2,5)
// const double = (arr) =>{
//     let doubleArr = [];
//     for (let i = 0; i < arr.length; i++) {
//          doubleArr.push(arr[i] * 2) ;
        
//     }
//     return doubleArr
// }

// var a = double([2,5,6]);
// console.log(a)


var arr = [2,4,6,7];
var str = ['enas', 'aiman', 'asma']

const newArr = arr.filter(
    (item) =>{
    return item < 4
}
)
console.log(newArr)

const newStr = str.map(
    (item)=>{
        let greet  =  `Hello to ${item}`
        return greet

    }
)

console.log(newStr)
// var persons = [
//     {firstname : "Malcom",lastname: "Reynolds"},
//     {firstname : "Kaylee",lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());