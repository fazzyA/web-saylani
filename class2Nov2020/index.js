// use of join method
//convert array to string
//sort array string
//sort array numeric
//reverse()
//foreach
// map method
// solve assignment
// toptal question
var arr = [1,2];
// var arr2 = [1,2];
// var newArr = arr.concat(arr2); // [1,2,1,2]
// var students = ['I','am','a','student'];

// var newSt = students.join(" ");
// //newSt = "ruhama asma madiha"
// console.log("newSt", newSt)
//  var num = 25;
//  var strNum = num.toString();
//  console.log("strNum", strNum)
 var students = ["ruhama", "asma", "madiha",
  "seema", "batool"];
  var numbers= [25,2,3,6,11,80]
  // 50 , 4, 9, 12 ,22,160
  //console.log(numbers.sort());
//   numbers.sort(mySort);
//   // [80, 30, 25, 11, 6, 3]
//  function mySort(a,b) {
//       return a-b
//   } 
//   console.log("numbers", numbers)
//   numbers.reverse();
//   console.log("numbers", numbers)
  // 80 30 25
  //string error

  
// var fruits = ['apple', 'mango','akhrot']
// fruits.forEach(function(item){
//     console.log(item + 'This is delicious fruit')
// })
//  var str = "faiza aziz khan"
//  var newstr
//  function titlecase(str1){
//      var st2 = str1.split(" ")
//      for(var i =0; i<st2.length;i++) {
//         st2[i] = st2[i][0].toUpperCase()+ st2[i].slice(1)
//      }
//      st2 =st2.join(" ")
//      console.log(st2)
//      return st2
//       }
// var newstr = titlecase(str)
// console.log(newstr)
 
//// count vowel
 var word = 'faiza';
 var count = 0;
 const vowels = ["a", "e", "i", "o", "u","a"]
 console.log(vowels.indexOf('h'));




 function calcuateVowel(aw){
     var newWord = aw.split('')
     console.log(newWord)
     for(let i = 0; i < newWord.length; i++) {
        //  if(newWord[i] == "a"  || newWord[i] == "e"|| newWord[i] == "i" || 
        //  newWord[i] == "o" || newWord[i] == "u") {
        //      count++;
        //  }
       if(vowels.indexOf(newWord[i]) > -1) {
           count++
       }
        // if (vowels.includes(newWord[i])) {
        //     count++;
        // }
         
     }

 }
 calcuateVowel(word)
 console.log(`you have ${count} vowels`)






// var arr = [2,5]
// var newar =[]
// function fe(arr) {
//     arr.forEach(e => {
//             newar.push( e*e)
//             console.log("fe -> newar", newar)
//     }); 
// }
// fe(arr)
// console.log("fe -> newar", newar)

