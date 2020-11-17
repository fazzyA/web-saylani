//var a =  condition ? exprIfTrue : exprIfFalse

let age = 18;
var cnic = (age >=18) ? 'yes' : 'no'
console.log(cnic)



var str = 'after break'
var learn = (str == 'after break') ? 'no' : 'yes'
console.log(learn)
// 5000 > 1000     and < 5000 500
var allowed = (age > 18) ? 'yes' 
            :(age == 18) ? 'let me think'
            :(age < 18)? 'not allowed'
            :'invalid'
console.log(allowed)