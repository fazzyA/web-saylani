// //1 one 2 two 3 three
// var a =3;
// if(a == 1){
//     alert('one')
// }else if(a==2){
//     alert('two')

// }
// else if(a==3){
//     alert('three')
// }
// else{
//     alert('other number')
// }
// var num = prompt('enter value')
// if(num >=0 ){
//     alert('positive')
// } else{
//     alert('-ve')
  
// }

// var students = ['habiba', 'sabahat','ramsha','aiman', 'areeba'];  // 4 lenght
// var newSt = ['ruhama', 'momina']
// var allST = students.concat(newSt)
// console.log(allST)
// var slice = students.slice(3,6)
// console.log(slice)
// console.log(students.length)
// students.push('ruhama');
// console.log(students) //5
// students.pop()    //4
// console.log(students) 
// students.shift()  // [] //3
// console.log(students) 
///// strings
var name = 'faiza'
var firstChar = name.slice(0,1)
firstChar = firstChar.toUpperCase()
var newName = firstChar + name.slice(1)
 var students = ['habiba', 'sabahat','ramsha','aiman', 'areeba'];  

for(var i =0; i < students.length; i++){
console.log(i + students[i] + ' is my student')

}
