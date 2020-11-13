var arr = ['quetta', 'kar', 'lahore', 'peshawar', 'gilgit']
arr.slice(1, 4)

var name = 'pakistan'
var firstChar = name.slice(0, 1)
firstChar = firstChar.toUpperCase()

var newName = firstChar + name.slice(1)
console.log(newName)

var obj = {
    meals: [
        { name: 'potato' },
        { name: 'beef curry' },
        { name: 'egg noodle' },

    ],
    snacks: 'No snacks',
    drinks: ['pinacolada', 'coca cola', 'pepsi']
} 
function  facebook(){
    window.location.href= 'https://www.facebook.com/'
}

console.log('snacks' in obj);
var myNewWindow  = window.open();
var content = '<h1 class="heading">New PopUp</h1>'
myNewWindow.document.write(content)
//myNewWindow.location.assign('new.html')




