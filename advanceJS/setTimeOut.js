/// setTimeout , setInterval
let t;
let click1 =() => {
  t = setInterval(displayDate,1000);
   
}
let stop = ()=>{
    clearInterval(t)
}
let a=0;
let displayTimer = () =>{
    a++;
    document.getElementById('aa').innerHTML = a;
}
let displayDate = () =>{
    let now = new Date()
    let h = now.getHours()
    let i = now.getMinutes()
    let s = now.getSeconds()
    let d = now.getDate()
    let m = now.getMonth()+1
    let y = now.getFullYear()
    a++;
    document.getElementById('aa').innerHTML = `${d}-${m}-${y} ${h}:${i}:${s}`;
}