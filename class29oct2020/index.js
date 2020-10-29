//funcions
// syntax 
// function greetStudents(name){
//     alert("Hello from "+name)
// }
// greetStudents('Habiba');
var result; //global
function sum(num1, num2, num3=0) {
    console.log("######################",num3);
    result = num1 + num2 + num3;
    return result
}
var addResult = sum(2,3,7);
console.log(addResult);  //undefined