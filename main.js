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