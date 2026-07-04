let str = "hello 'world'"
let str1 = 'hello "world"'

let str3 = "ghhg\"n   "
let x = "hello world"
console.log(x.length)
let y = new String("hello world")
console.log(y.length)
console.log(str.charAt(0))
console.log(str.charAt(5))
console.log(str.slice(0,-1))
console.log(str.substring(0,-1))

let mystr = "this is deep"
console.log(mystr.toUpperCase())
console.log(mystr.toLowerCase())
console.log("       DEEP      ".trim())

1st way to create a function
function name(parameters){
    statement
}
function hello(parameter,parameter2){
    console.log(parameter)
    console.log(parameter2)
    console.log("hello world")
}

hello(1,2)
2nd way to create a function
let name = function(parameters){
    statement
}

let sum = function(a,b){
    return a + b
}

// console.log(sum(2,3))
let myfunc = function hello2(name){
    console.log(`hello  ${name} form function expression`)
    console.log("hello " + name + "from function expression")
}


myfunc("abc")