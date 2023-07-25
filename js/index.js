// // () - function
// // [] - array
// // {} - object

// var a = "Sebuhi"    // string  /str   / text
// var b = 35          // number  / int  / integer
// var c = true   // boolean / bool / True - 1 ve False - 0 
// var d
// var f = null

// var g = ["Student","Teacher"]

// console.log(typeof a + " -> " +a)
// console.log(b + " -> " + typeof b)
// console.log(c + " -> " + typeof c)
// console.log(d + " -> " + typeof d)
// console.log(f + " -> " + typeof f)
// console.log(g + " -> " + typeof g)

// // demo()

// // function demo(){
// //     var date = new Date("2025-03-25")
// //     var today_date = new Date()
// //     // console.log(date.getDate())
// //     console.log(today_date)
// // }

// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age: "25"
// };

// console.log(`${person.age} ${person.firstName}`)

// const persona = [
//     "John","Doe","25"
// ]

// console.log(`${persona[0]} ${persona[2]}`)

// if(localStorage.getItem("my_text")){
//     document.querySelector("#demo").innerHTML = localStorage.getItem("my_text")
// }


// function demo_view(){
//     const persona = [
//         "John","Doe","25"
//     ]

//     var aa = document.querySelector("#demo").innerHTML = `${persona[0]} ${persona[2]}`
//     localStorage.setItem("my_text", aa)
// }


// function sil(){
//     localStorage.clear();
// }



// setTimeout(function(){
//     alert("Hahaha")
// }, 5000)


// setTimeout(boom, 10000)
// function boom(){
//     document.querySelector("body").style.background = "red"
// }

setTimeout(stopla, 10000)

function stopla(){
    clearInterval(a)
}



var reqem = document.querySelector("#reqem")

var a = setInterval(artir, 1000)

function artir(){
    reqem.innerHTML += "Hello"
    console.log(a)
}



// setInterval(function(){
//     reqem.innerHTML += "Hello"
// }, 5000);




// function yukle(){
//     document.querySelector("body").style.background = "red"
// }