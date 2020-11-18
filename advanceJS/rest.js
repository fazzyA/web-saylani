let sum = (a, ...b) =>{
    console.log(a)
    console.log(b)
    var res1 = b.reduce((item,index) =>{
        return item-index
    })
    res1 = a - res1 ;
    console.log(res1)
    return res1
    
}
var res = sum(60,20,10)
let [a , b, c, d, ...e] = [10, 20,30, 40,5,6,7];
// console.log(e)
function check(...op){
    console.log(op) //[1,2,3]
   // [a,b,c] =[1,2,3]
    let [a,b,c] = op
console.log(a,b,c)
}
check(1,2,3)

//let [a,b] =[10,29]