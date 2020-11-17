// include, find, filter,reduce
var teachers =['faiza','inzimam','mughal']
var students = ['kulsoom', 'aiman','maryam','komal','tooba']
var ages = [20, 15, 18, 16, 21];
var str = ['enas', 'aiman', 'asma']
let find = teachers.find((item) => {
    return item == 'faiza';
})
if(find) {
    let res = students.map((item,index)=>{
        return { name:item, age:ages[index] }
    })
    console.log(res)
}


///map
const newStr = str.map(
    (item)=>{
        let greet  =  `Hello to ${item}`
        return greet

    }
)

console.log(newStr)

//   [{name:'kulsom' ,age:20} , {} ,{}]
// find
var sub = [200 , 100]
var toFind = 'aiman'
var a = students.find(
    (item, index) => {
        return item == toFind
    }
)
console.log(a)
///includes
var b = students.includes('aiman')
console.log(b)
var c = ages.filter(
    (item, index) => {
        return item >=18
    }
)
console.log(c)
///reduce
var ages = [20, 15, 18, 16, 21];

var d = students.reduce(
    (item, index) => {
        return item + index
    }
)
console.log(d)
