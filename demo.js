
var a = 10;
console.log(a)
// document.write("First file")
document.write(a)

var b = "vikas";
document.write(b);
document.write(typeof a)
document.write(typeof b)

var variable = true;
alert(variable)
alert(typeof variable)

var var1 = 5.5
alert(typeof var1)

var arr = [1,2,3, "g"]
alert(arr)
document.write(arr[0])
alert(typeof arr)

var value = null
console.log(typeof value)

var Myname = {
    firstName: "Vikas",
    lastName: "Ponnusamy"
}
console.log(Myname)
console.log(Myname.lastName)


  function functionName(num1, num2){
    return num1 + num2
}
// Calling function
var anotherVar = functionName(9,13)
console.log(anotherVar);


// If statement

var chocolate = "Dairy Milk";

if(chocolate == "Dairy Milk"){
    console.log("I love Dairy Milk")
}
else if(chocolate == "Kitkat"){
    console.log("I am not love Kitkat")
}
else{
    console.log("I don't like chocolate")
}


// Switch
var luckynum = 13;

switch(luckynum){
    case 1:
        console.log("Not lucky");
        break;
    case 13:
        console.log("My luckynum")
        break;
    default:
        return 0;
}

//For loop

for (var i =0; i < 6; i++){
    document.write(i);
}

//Array with for loop

var arr = ["vikas", "B.E", "CSE"];

for(var i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

//While loop

var key = 5

while(key <5){
    console.log(key);
    key++;
}