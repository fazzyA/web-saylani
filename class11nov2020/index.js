/// var obj = {
 //   meals: [{}, {}, {}]
//}
var submitForm  = document.getElementById('submit1');
console.log(submitForm)

const searchRecipe = (e) => {
    e.preventDefault();
var search  =  document.getElementById('search');
console.log(search.value) 
var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
console.log(api2)
/// api call
fetch(api2) // Call the fetch function passing the url of the API as a parameter
.then(res => res.json())
.then(function(data) {
    // Your code for handling the data you get from the API
    console.log(data.meals)
    const recipesArr = data.meals;

    var row  =  document.getElementById('row');

    for(let i = 0; i< recipesArr.length; i++){
        var div = document.createElement('div')
        var img = document.createElement('img')
        img.setAttribute('src',recipesArr[i].strMealThumb)
        img.className='myImg'
        div.className = 'box';
    var text = document.createTextNode(recipesArr[i].strMeal)
    div.appendChild(text)
    div.appendChild(img)
    row.appendChild(div)

    }




})
.catch(function(error) {
    // This is where you run code if the server returns any errors
    console.log(error)
});
search.value = '';
}
function searchRandom() {
    var api = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(api)
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        var recipeSingle= data.meals
        for(let i = 0; i< recipeSingle.length; i++){
            var row  =  document.getElementById('row');
            var div = document.createElement('div')
            var content = document.createElement('div')
            var textcontent = document.createTextNode(recipeSingle[i].strInstructions)
            content.appendChild(textcontent)
            var text = document.createTextNode(recipeSingle[i].strMeal)
            div.appendChild(text)
             row.appendChild(div)
             row.appendChild(content)
        }
  
    })




    
}
submitForm.addEventListener('submit', searchRecipe);
