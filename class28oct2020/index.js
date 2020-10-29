console.log('hello world');
// //alert(`hello
// // world`);
// //  var someNumber = 4*1;
// //  var anotherNum = someNumber + 2; //6
// //  anotherNum++;//7
// //  console.log(++anotherNum);//8 
// //  console.log(anotherNum)//8

// var total = 2;
// // var another = total; //2
// // var sum = total + another; //4
// // var nationality = "US" ;
// // console.log(nationality)
// // alert(nationality)
// // var $name = 'ffsfsfs';
// // alert(2+2);

// // alert(`this is me
// // hi hello`)
// // alert("this is me \n my class")


// // var birthYear;
// // birthYear = 2000;

// // alert(`type of variable birthYear is = `+ typeof birthYear)

// var age = prompt('enetr ur age');
// var ageInDays = age + 365;
// console.log(`My age in days is = ${ageInDays}`)
// console.log("My age in days is = " + ageInDays)

// var num = prompt('enetr ur num');
// if (num > 0) {
//     alert(`your number = ${num}
//     and it is positive`
//     )
// }
// else {
//     alert(`your number = ${num}
//     and it is negative`
//     )
// }
var num3;
function square(num) {
    // make a square of a number
 num3= num * num;

}
square(6); //num3 =36
alert(num3); //36

var name = prompt('enter ur first name');
var middleName  =prompt('enter ur mid name')
var lastName = prompt('enter ur last name')
var greet;
function displayGreet(name, middleName, lastName) {
 greet=  'My name is ' + name + " " + middleName + " " + lastName
   return greet
}

var result = displayGreet(name, middleName,lastName);
var myNumber;

function inc(num) {
    myNumber = ++num;
    return myNumber
}
//alert(inc(5));
var result = inc(5);
alert(result);