// console.log('hello')
// //console.log(Math.random())

// var arr = ['habiba','aiman', 'ruhama','seema',
// 'habiba1','aiman1', 'ruhama1','seema1',
// 'habiba2','aiman2', 'ruhama2','seema2']
// // console.log(Math.random() * 12);
// var range = Math.floor((Math.random() * 11)+1)
// console.log("range", range)
// console.log(arr[range]);

// // nested arrays
// var names = ['shehla', 'seema','areeba','kulsoom','asma','madiha'];
// var degree = ['matric','inter', 'graduation']
// for (let i = 0; i < names.length; i++) {
//     for (let j = 0; j < degree.length; j++) {
//         console.log(element = names[i] + ' '+degree[j])
        
//     }
//     //const element = array[i];
// }
//var luck = ['ohoo', 'yahoo', 'alas','damn','yeeee','hurray']

/////DATE n TIME 


//  var future = new Date()
//   future.setDate(3)
//   var dob =  new Date();
//   dob.setFullYear(1993)
//   console.log("future", dob)
  
//  var future = new Date('Nov 5, 2022 9:00:00');
// // console.log("future", future)
// //console.log("now", now.getTime()/(1000*60*60*24))
// var diff = future.getTime() - now.getTime()
// diff  = diff /(1000*60*60*24)
// console.log("diff", diff);
// var now = new Date();
// function formatDate(date){
//     var format = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
//     console.log(format)

// }
// formatDate(now);


// (function tryme(){
//     console.log('my js is working')
// })()

// function sum(a,b=0){
//     var c = a+b;
//     console.log(c)
//  }
//  sum(2)(3)

var arr1 = "john".split(''); // [j o h n] 4
var arr2 = arr1.reverse(); //[n  h  o j]
console.log("arr2", arr2)
var arr3 = "jones".split(''); //[j o n e s]
arr2.push(arr3); // [n  h  o j  [j o n e s]]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

 var names = ['shehla', 'seema','areeba','kulsoom','asma','madiha','xyz'];


console.log("names", names.slice(3))



