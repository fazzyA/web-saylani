// spread op ...
// refering one array
var arr = [2,3,4,5]
var arr2 = arr; 
arr2[0] = 4;  // 4 3 4 5
console.log(arr) 
var arr = [2,3,4,5]
var arr1 = [6,7,8,9]
var arr2 = [...arr]
arr2[0] =4
console.log(arr)
console.log(arr2)
//var arr3 = arr.concat(arr1)
var arr3 = [...arr , ...arr1];
console.log(arr3);
var obj ={name:'faiza'};
var objNew = {...obj};
objNew.deal = 2;
console.log(objNew)


function sum(x,y,z){
    return x+y+z
}
//sum(3,5,6);
let arr4 = [3,5,6]
var res = sum(...arr4)
console.log(res)