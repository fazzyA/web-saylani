// var a =10;
// var b =20;
// var c =30;
// let [a , b, c, d, ...e] = [10, 20,30, 40,5,6,7];
// console.log(e)
// let g ,h;
// [g=1 , h=9] =[1 , 9]
// console.log(g)

// [num1 , bb, cc, dd] = [10 ,20, 30, 40, 50 ,60,70];
// console.log(num1)
//object destructuring
var obj = {  name:'faiza', status:"active", age: 37}
let {name, status ,age} = obj
console.log(name,status);
var obj2 = {  name:'faiza'}
//arr destructuring
var arr = [1,2,3]
let [a,b,c] =arr