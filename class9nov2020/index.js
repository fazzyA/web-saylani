function addList() {
    var x = document.getElementById('mydiv')
    console.log(x.name)
    x.className += ' origin'
    var para = document.createElement('p')
    var text = document.createTextNode('third para')
    para.appendChild(text)
    x.insertBefore(para, x.firstChild)

}
function addItem() {
   var li = document.createElement('li')  //<li></li>
   var textLi = document.createTextNode('eat an egg')
   li.appendChild(textLi) //<li>eat an egg</li>
   var list = document.getElementById('list')
   list.appendChild(li)
    
}
function humpty() {
    var x = document.getElementById('humpty')
    console.log(x.nodeName)
    x.firstChild.innerHTML='asdasd'
}
function grabPara(){
    var x = document.getElementById('para');
    console.log(x.className)
    x.className +=  ' newpara'

}
function addPara() {
    var x = document.createElement('p')
    var text = document.createTextNode('new paragraph')
    x.appendChild(text)

    var div = document.getElementById('mydiv');
    //div.appendChild(x)
    div.insertBefore(x,div.firstChild.nextSibling)
    
}
function makeinvisible(){
    var x = document.getElementsByTagName('img');
    console.log(x[0].src)
    x[0].className = 'invisible'

}
function alter() {
  console.log(document.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0]);
    
   var x = document.childNodes[0].childNodes[1]
  .childNodes[1].childNodes[1]
  console.log(x.nodeType)
 x.innerHTML = 'sydney'
  // var div = document.getElementById('city')
    // var x = div.getElementsByTagName('p');
    // var tochange='kuwait'
    // x[1].innerHTML ='Sydney'
    // // console.log(x)
    // // for (let i = 0; i < x.length; i++) {
    // //     if(x[i].innerHTML == 'Kuwait'){
    // //         x[i].innerHTML='sydney'

    // //     }
        
    // //}
}
//document.addEventListener('contextmenu', (e) => e.preventDefault())