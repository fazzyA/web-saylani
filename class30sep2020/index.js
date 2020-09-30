//console.log('my new class 30');
// age < 18 and age >= 60 and nationality other than usa
//greencard
// && and
// || or

// age < 18 || age >=60 nationality !=usa
var nationality = 'pak';
var age = 70;
     // t || false && true
if((age < 18 || age >=60) && nationality !='USA') {
    if(age<18){
        console.log('greencard holder for kids')
     
    }
    else{
            console.log('greencard holder')

    }
} // parent if
else{
    console.log('not allowed')
}