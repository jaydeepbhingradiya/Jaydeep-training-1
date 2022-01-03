let js = 45;
if (js === 45) {
    alert("java script is fun!");
}
console.log(10 + 50 - 33);

function myfunc() {
    document.getElementById("demo").innerHTML = "hey jaydeep how are you??";
}

let x = 10,
    car;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10
document.getElementById("let").innerHTML =
    "here x is " + x + "<br/>" + typeof ["jay", "meet"] + "<br/>" + typeof car;
var a, b, c;
a = 5;
b = 24;
c = a + b;
document.getElementById("sum").innerHTML = "sum of a and b is : " + c;