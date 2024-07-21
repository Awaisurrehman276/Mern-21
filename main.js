// Case 1: When we intialize value without the data type in Block 
let awais= 94;
console.log(awais);
{
    awais=81;
    console.log(awais);
}
console.log(awais);

// Case 2: When we intialize value with the data type in block (reassign values)
let a=109;
console.log(a);
{
    let a=115;
    console.log(a);
}
a=1;
console.log(a);

// Case 3: When we redefine variable names( Shows error as LET don't allow to redefine same variable name)
//let a=109;
console.log(a);
{
    let a=115;
    console.log(a);
}
a=1;
console.log(a);
//
//Case 1(Const) Where we reassigned value of Const in block
const Age=24;
console.log(Age);
{
    const Age= 9;
    console.log(Age);
}
console.log(Age);
//Case 2(Const) Where we used no value of const in the block
const Age1=61;
console.log(Age1);
{
    
    console.log(Age1);
}
console.log(Age1);

//
//Case of Var( reassigned, redefined)
var test= "working";
console.log(test);
{
    var test= "okay";
    console.log(test);
}

var test="still working";
console.log(test);
// To check type of value 
let anyvalue= "idk";
console.log(typeof anyvalue)
// to conver string into number
let converstion= Number(anyvalue)
console.log(converstion)
// boolean change
let oknumber= -15;
newconversation = Boolean(oknumber);
console.log(newconversation)
// String Interpolation

let name= "Awais";
let degree="CS";
console.log(`My name is ${name} and I've done bacholar in ${degree}`)
// intializing string through object method 
const newstring= new String('Okay THIS IS String')
console.log(newstring.length)
// url replacce

const url="https://yourvinchecks.com%40okay"

console.log(url.replace(`%40`, `-`))

//Arrays
const myarr= [1,2,4,5,7,3]

const newarray= new Array("Awais", "Ali", "Humza")
//console.log(newarray[0]);
console.log(newarray.push("try"))
console.log(newarray)

// to add an element in the start in array
console.log (newarray.unshift(4))
console.log(newarray) 

// shift to use to remove from the start.

const user= {
    name: "Awais",
    age: 24,
    email: "aur276@gmail.com",
    hisarr: [2,7,6],

}
user.greeting=function(){
    console.log("Hey there, I'm testing")
}

// to call a value in object.
user.greetingtwo=function(){
    console.log(`Hey there, I'm testing ${this.name}` )
}
console.log(user.greetingtwo())