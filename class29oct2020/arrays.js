// // // ARRAYS
// // var a = 0;
// var old = ['habiba', 'areeba', 'aimen','seema','maryam', 'sahar'];
// var newSt = ['Sultana', 'Qamar', 'Parvez','Sikandar', 'jameel', 'Suleman'];
// var FullList = [];

// if(old.length === newSt.length){

//     for(var i = 0; i < old.length; i++) {
//      FullList[i] = old[i] + ' ' +newSt[i];

//     }
//     console.log("FullList", FullList)

// }

// // for , while, do while

// // for(var i = 1; i < 11; i++){
// //     console.log(i, 'Faiza');
// // }


// // console.log(names.length);

// // // console.log(names[a]);

// // names.push('shehla')

// // console.log(names)

// // names.push('XYZZ')
// // console.log(names)

// // names.pop('XYZZ')

// // console.log(names)

// // names.unshift('mismah') //add in start of an array
// // names.shift('mismah') //remove start of an array

// // console.log(names);

// // var animals= ['cat', 'dog', 'horse', 'donkey', 'monkey', 
// // 'cow','mouse', 'crow', 'eagle', 'sparrow'];

// // console.log("animals", animals)

// // var birds;

// // birds = animals.slice( 1, 4  );
// // console.log("birds", birds)

var Stud= ['aimen', 'habiba','sahar','faiza'];

var name = 'mismah';
var result = false;

for(var i =0; i < Stud.length; i++) {
    if(Stud[i] == name) {
        result = true
        break;

    } 
}

if(result) {
    console.log('name is found')
} else{
    console.log('name is not found')
}










