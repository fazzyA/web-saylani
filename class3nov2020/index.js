/*
charAt
i lastiOf
replace
random
round ceil float
create dice random
str to num
num to str
*/
// var str = "the quick brown fox jumps over the quick brown fox the lazy dog the ";
// // replace "the quick brown fox" with the "the white cat"
// // use slice method
//  console.log(str.lastiOf('quick'));
//  console.log(str.charAt(2));
//  var sliceToReplace = str.slice(0,19); // the quick brown fox
//  var replaceStr = "the white cat"
//  var newStr = replaceStr + str.slice(19);
//  console.log(newStr)

//  ////
//  var start= str.iOf('the quick brown fox');
//  var replace = "the quick brown fox";
//  var end = start + replace.length;
//  //console.log( findInd + replace.length);
//  var newText = str.slice(0,start) + replaceStr + str.slice(end);
//  console.log(newText)


//  str = str.replace(/the quick brown fox/g, "the white cat")
//  console.log(str)

// var find ="!"
// var str = "hello  world!"
// var address = str.indexOf("!")
// if(address !== -1) {
//     console.log(`! found at address ${address}`)
// }
// var phrase= "my test is  double space"
// var find = '  ';
// for (let i = 0; i < phrase.length; i++) {
//     if(phrase.slice(i, i+2) == "  "){
//         console.log('yes double space found')
//         break
//     }
// }
// var input  =  prompt('enter any integer num');
// console.log(typeof input)

// var result = parseInt(input) + 1; 
// console.log("result", result)

/////fiver 3000 Rs/- cuts off 20% 

var total = 4804.69;
var commission = 20;
var percentage = total * commission / 100;
console.log("percentage", percentage)
var remaining = total - percentage
//remaining  = Math.floor(remaining)
console.log("remaining", remaining.toFixed(3))
//      round   floor   ceil
//44.9     45     44       45
//44.00001 44     44       45



function roundOff(num,n) {
 num = num.toFixed(n)
 console.log(num)
}

roundOff(4.34976123, 4)
roundOff(5.3497615523, 2)


