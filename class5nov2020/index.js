// // var myDay = new Date().getDay()
// // console.log("myDay", myDay) //4
// // var day = daysArr[myDay]  //thurs
// // if (day == 'fri' || day == 'sat' || day == 'sun') {
// //     console.log('its a weekend')
// // }
// // else {
// //     console.log('its a weekday')
// // }
// // switch (day) {
// //     case 'sun':
// //         alert('yahoo its sunday');
// //     case 'sat':
// //         alert('yahoo its sat');
// //     case 'fri':
// //         alert('yahoo its fri');
// //     default:
// //         alert('its a working day');

// // }
// // var a = 1;

// //  if(a == 1){
// //     alert('one');

// //  } else if(a ==2){
// //     alert('two');

// //  }else if(a ==3){
// //     alert('three');

// //  } else{
// //      alert('num not known')
// //  }


// // switch (a) {
// //     case 1:
// //         alert('one');
// //         break;
// //     case 2:
// //         alert('two')
// //         break;
// //     case 3:
// //         alert('three')
// //         break;
// //     default:
// //         alert('num not known')

// // }
// // for(var i =1; i <= 10; i++){
// //     console.log(i,' faiza')
// // }
// var daysArr = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat']
// var i = 0;
// while(i < daysArr.length ) {
//     console.log(daysArr[i])
//     i = i+2;
// }
// //sun tue thur sat
// var b =11;
// do{
//     console.log(b)
//     b++ //4
// } while(b < 10)


var ans =5 ;

do{
     user = +prompt('enter num', 4)
     if(user == ans){
         console.log('you have won')
     }
}while(user !== ans)