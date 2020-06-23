// Ways to print in JavaScript
// console.log("Hello World"); 
// alert("me")
// document.write("HI BABU")


// 2- JavaScript Console API


// console.log("HELLO WORLD", 10 + 78, "HELLO DUNIYA")
// console.warn("THIS IS A WARNING")
// console.error("THIS IS AN ERROR")
// /*
// multi 
// line 
// comment */


// var number1 = 45
// var number2 = 98
// console.log(number1 + number2);

// var str1 = "This is a string";
// var str2 = "This is also a string";

// /* OBJECTS */

// var marks = { TARUN:89 , TANYA:98 , RANA:80}

// console.log(str1)
// console.log(marks);

// var arr = [1,2,3,"bablu",4,5,6]

// console.log(arr[4])
// console.log(arr[3])
// console.log(arr)
// console.clear()


// //FUNCTION

// function avg(a,b){
//     return (a+b)/2
// }

// j=avg(78,98)
// console.log(j)


// // CONDITIONALS

// var age = 14

// if(age>7){
//     console.log("YOU ARE NOT A BAUWAA");
// }

// else{
//     console.log("YOU ARE A LALLA")
// }

// let myArr = ["FAN","CAMERA",56,76,null,true]
// myArr.pop()
// console.log(myArr)
// myArr.push("TARUN")
// console.log(myArr)
// myArr.toString()
// console.log(myArr)

// let MyString = "tarun is a good boy"

// console.log(MyString.length)
// console.log(MyString.lastIndexOf("good"))
// console.log(MyString.slice(0,6))
// d=(MyString.replace("tarun","rohan"))
// console.log(MyString,d)

// let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear()) 


// //DOM MANIPULATION

// let ele=document.getElementById('click')
// console.log(ele)

// let eleClass=document.getElementsByClassName("container")
// console.log(eleClass)

// //eleClass[0].style.background = "yellow"
// //eleClass[0].classList.add("bg-primary")
// //console.log(eleClass[0].innerHTML)
// //console.log(eleClass[0].innerText)

// tn = document.getElementsByTagName("div")
// createdElement =document.createElement("p")
// createdElement.innerText = "THIS IS A CREATED PARA"
// tn[0].appendChild(createdElement)
// createdElement2 =document.createElement('b')
// createdElement2.innerText="this is a created bold"
// tn[0].replaceChild(createdElement2 , createdElement)

// tn[0].removeChild(createdElement2)



// //SELECTING USING QUERY

// sel = document.querySelector('.container')
// console.log(sel)

// sel2 = document.querySelectorAll('.container')
// console.log(sel2)


// function clicked(){
//     console.log("THE BUTTON WAS CLICKED")
// }

// window.onload = function(){
//     console.log("THE DOCUMENT WAS LOADED")
// }

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML

//firstcontainer.addEventListener('click' , function(){
//    document.querySelectorAll('.container')[1].innerHTML = "<b>WE HAVE CLICKED</b>"
//    console.log("CONTAINER WAS CLICKED")
//})

//firstcontainer.addEventListener('mouseover' , function(){
//    console.log("mouse was moved")
//})

//firstcontainer.addEventListener('mouseout' , function(){
//    console.log("mouse was removed")
//})

// firstcontainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML
//     console.log("mouse up when clicked on container")
// })


// firstcontainer.addEventListener('mousedown' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>WE HAVE CLICKED</b>"
//     console.log("mouse down when clicked on container")
// })

// Set Timeout and Setinterval
logkaro = ()=>{
    document.querySelectorAll('.container')[0].innerHTML = "<b>SET INTERVAL FIRED</b>"
    console.log("I AM YOUR LOG")
}
//setInterval(logkaro , 5000);

//clr = setInterval(logkaro , 2000);


// JAVASCRIPT LOCAL STORAGE
//localStorage.setItem('name' , 'tarun')
//localStorage.getItem('name')


//JAVA SCRIPT OBJECT NOTATION(JSOM)

obj = {name:"tarun" , length: 1}
jso = JSON.stringify(obj)
console.log(typeof(jso))
console.log(jso)
parsed = JSON.parse('{"name":"tarun","length":1}')
console.log(parsed);




















