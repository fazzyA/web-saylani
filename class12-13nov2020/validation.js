function checkForm() {
  //  e.preventDefault()
  var city = document.getElementById('city');
  var gender = document.getElementsByName('gender');
for(var i = 0; i<gender.length; i++){
    if(gender[i].checked){
        return true
    }
    alert('select gender')
    return false
}
var lastName = document.getElementById('last');

  if(lastName.value == ''){
        alert('please fill last name')
        console.log('please fill last name')
        return false
    }
    if(city.selectedIndex == 0){
        alert('please select any city')
        return false
    }
}

function click1() {
    var x = document.getElementById('mydiv');
     var button  = document.createElement('button')
     var text = document.createTextNode('Dynamic')
     button.setAttribute('id','dynamic')
     button.addEventListener('click', function(){
         console.log(`your new button function is called`)
     })
     button.appendChild(text)
     x.appendChild(button)

}
    
var old = document.getElementById('old')
old.addEventListener('click', ()=> click1())


var arr = ['mango', 'apple', 'pineapple']
arr.forEach(function(item, indx){
    console.log(`${indx} - ${item}`)
})