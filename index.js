

// HOISTING
// At the top Variables decalre hojatay hain bs lekin un ki values nhi pata chalti
// DECLARED But Not INITIALIZED (,means ya tw pta chal jata ha ka variables hain lekin undefined
// hota ha at the top )
// SUMMARY
// var me agar nechay intialize kra hoto woh oper DECLARED hojaiga lekin initialized nh hojaiga
// matlab agar define krny se pehly wali line pr usy use kregy tw undefined aiga pr error nhi
// or let me pehley use kreinga tw error aiga pehly use nh krskty let me




// ARROR Functions
// const work3 = a => { console.log(a) }
// yaha ya bta rahe hain ka arrow functions me aggar ek parameter hai tw function me bracket
// lagane ki bh zarurat nh ha

// work4 = (a, b = 7) => a + b
// {yaha ya bta rahy hain ke arrow ke bad kch bh likhogay woh by default return hojaiga}






// PREMETITATIVE & NON PREMETATIVE
// Non premitative ka agar constants use karaingay tw is ka matlab ab pura array hata kar koi
// naya array waha nahi rakh saktay lekin us ka andar changing or push pop slice splice ka
//  function run krskty hn lekin pura array replace nhi hota








// FILTER
// const numbers = [1, 2, 4, 6, 8, 9]
// const evens1 = numbers.filter(val => val % 2 === 0)
// console.log(evens1)

// matlab agar filter ke andar di gai condtions true hogi tw woh array me rahainga warna nikal
// jaingay








// FOREACH
// const exARR = [1, 2, 3, 4, 5, 6, 7, 8]
// exARR.forEach(val => console.log(val))











// Rest parameters

// function f(x,y,...a){
//     console.log(a)
//     return x+y * a.length
// }
// console.log(f(2,3,4))

// MATLAB pahla argument pehla variable ke lya dusra variable dusray ky lya or bako 
// ka jitnay bh bachainga woh a ma as a array save hojainga










// Spread operators
let params = ["hello", true, 7]
let other = [1, 2, ...params]
// console.log(other)

// SPREAD Operator OVER STRING  
var str = "Mustafa"
let strArr = [...str]
// console.log(strArr)

// ya ek ek letter ko alag alag indexes pr daldega









// VAR LET CONST 
// var kahi bh update declare hosakta ha 
// let update hosakta ha pr redeclare nhi
// const na hee redeclare hosakta ha na hee update








// Template Literals
const val = 5
// console.log(`This is answer : ${val === 5 ? true : false}`)










// Enhancing object making
// const x = 0
// const y = 0
// const obj = {x,y}
// or
// const obj = {x : x,y : y}
// console.log(obj)










// CUSTOM/DYNAMIC KEY
const quux = () => Math.round(Math.random())
// dynamic key
const foo = {
    name: "mustafa",
    ["baz" + quux()]: 321
}
// console.log(foo)

// AGAR key custim krnui ha or us me koi value plus krni ha ya kch bh operation krna ha tw swuare brackets
// mtlb










// functoin in key by simple javascript
// let obj= {
//     foo : "bar",
//     square : function(num){
//         return num ** 2
//     }
// }
// console.log(obj.square(4))







// Destructuring
// Array
// let list = [1, 2, 3, 4, 5, 6, 7]
// let [a, , b, ...c] = list
// console.log(a, b)
// console.log(c)










// Object
// let data = {op:5,lhs:1 , rhs:10}
// let {op,lhs,rhs} = data
// console.log(op,lhs,rhs)
// jo keys hum destructiure karainga woh yay variable bnadega or unkeys i values us variable me
// daldega'







// Nested Object Destructuring

// let data1 =  {op1:5,lhs:{lhs1 :1,lhs2 : 2121} , rhs1:10}
// let {op1,lhs:{lhs1,lhs2},rhs1,lhs   } = data1
// console.log("******************")
// console.log(op1,lhs1,rhs1)
// console.log(lhs2,lhs)











// default value destructuring
// let objD = {x:1 , y:5}
// let arrD = [1,5]
// let  {x,y = 10} = objD
// let  [g,f] = arrD
// console.log(x,y)
// console.log(g,f)

// ya sequence wise destructure krlega or agar y na dya hoga tww default value use krlega



// OR IN FUNCTTIONS
// const g21 = ([name ,val]) =>{
// console.log(name,val)
// }
// g21(["mustafa","36568"])


// const o21 = ({name ,val}) =>{
//     console.log(name,val)
// }
// o21({name :"mustafa",val :"36568"})
// OR

// const o21 = ({name  : n,val : v}) =>{
//     console.log(n,val)
// }
// o21({name :"mustafa",val :"36568"})










// FramerWORK vs Library
// Framwork
// library me hum us ka functions bnay banaye use krlteeteey hain call krrky

// Library
// less number of rules like also they built by you like (home)
// lkn framework me hum framework hamara code ko use kr raha hota hai 
// jese ke express jab hhum express ko app=express() isky andar call krky use krty hain

// phir app ka andar apna code bnaty hain













// CLOSURE
const sum = (a) => {
    console.log("live viewwers are " + a)
    var c = 4
    return function (b) {
        return a + b + c
    }
}
var store = sum(4)
// console.log(store(4))

// Agar koi function ke andar ek or function hoga tw hum function ko store me call karainga
// or us store ok me qk ek function hee return horaha hoga tw use dubara call krainga
// twww purana variables bh delete nhi hoy honga isi concept ko closure kehtey hain





// LEXICAL SCOPE 
// matlab varriabkes same scope me use kr skty hain hum












// fetch("API Url")
//     .then(res => res.json())
//     .then(res => console.log(res))

// convert above code using async await  
const callApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
}
callApi();


// We use the .json() method to convert the response body into JavaScript object so that we can access the data in an easier way.














function yourThought(think) {
    const remember = `you're thinking about ${think}`

    function getThought() {
        return remember
    }

    return getThought()

}

const store1 = yourThought("closures")
console.log(store1)

// it will returns : you're thinking about ${think}

///////////////////////////Closure Summary definition

// Simply Closure is just accessing the outer scope variablesa and remembering it 
// OR
// Closure is when a function is able to remember and
// access its lexical scope even when that function is
// executing outside its lexical scope.



///////////////////////////Lexical Summary definition
// we can use global variable inside a function but functional scope variable cannot be used outside


















var cities = ['Karachi', 'Malir', 'Lahore', 'Faisalabad']
cities.push("Islamabad")
// console.log(cities)
// Push add karta ha array ka end mn element ko or real array mn bhe update kardeta ha >>>> method:   cities.push("element")    bracket m dalna zarori ha
// Pop end sa nikalta ha or real array mn update kardeta ha   >>>> method:   cities.pop() >> brracket mn kuch nhi daltay
// shift start sa nikalta ha >>>> method:   cities.shift()  >>> bracket m kuch nhi daltay 
// 
// var cities = ['Karachi', 'Malir', 'Lahore', 'Faisalabad']
cities.unshift("Malir")
// console.log(cities)
// unshift start mn dalta ha  mn dalta ha  method:   cities.shift("element")  >>> bracket m dalna zarori hy 


cities.splice(2, 2, "pig", "duck", "emu");
// console.log(cities)

// 2 index sa start krega 2 element delete kara ga mtlb 2,3 phir 2nd index par hee pig,duck,emu add krdega
// cities.splice(2, 2) >>> agar khali ya likhaingay tw 2 index sa 2 elemtn delet honga or real array 
// mn updation hojaigi

// cities.splice(2, 0, "pig", "duck", "emu")
// is method sa 2 index ,mn ya 3 elmeent add hojainga


var nums = [34, 65, 12, 5, 423, 32]
// console.log(nums.sort());
// >>>>>that will sort an array
var nums = [34, 65, 12, 5, 423, 32]
// console.log(nums.sort().reverse());









// UNSHIFT Start me dalta ha andar ek value deni hoti ha
// PUSH LAST ME DALTA HA

// cities.splice(2, 2, "pig", "duck", "emu");
// ya 2 index sa start krega or usmy sa  2 elemtn hatay ga or ya 3 daldega

// cities.slice(2,4)
// koi specific part array sa nikalna kay lya slice chalaty hn '





























// Node js questions


// 1) what is node js and why to use node js?


// lanugage vs runtime

// JS
// ye bnaya gya tha pages ko dynamic krny ka lya
// Javascript ko execute krny ke lya ek compiler ki zarurat hoti ha

// WHY Node js created?
// Nodejs isey lya banai gai thi qk javascript pr kam krny se ek limitaion agai thi ke
// hum sirf wohi apps bna sakty thay jo browser pr run hoti hoo browser ky bahir nhi bna sakty
// thy qk usky lya context chahyay hota ha





// Summary
// JS sa hum aisi apps bna sakty hain jo browser pr chalay qk app chalany ka lya browser ko
//context provide krna chahyay ...
// Node js jabhi qk hamary pas ek limitation thi ke hum aisi apps hee bana sakty hain jo browser
// par chalain qk contexr required hota ha app browser pr chalana ka lyay
// tw hum ne ek run time enviroment banaya mtlb JS browser ka bahir JS chala sakein hum
// or hum ne ismy context provide kradya node me
// nodejs run time environment ha jo operating system pr run hota hy



// Node-Fetch library hy joo nodejs pr banai gai hy or isy boroweser ki zarurat nh hay
// qk ya nodejs pr v8 engine pr chalaigny isy requests handling krty hain





// Node js ek javascript open source environment or library
// developers can create real-time applications and web services that run without a browser







































// All questions Sir wala

