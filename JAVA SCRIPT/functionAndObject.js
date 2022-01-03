var x = sum(5, 6);

document.getElementById("demo").innerHTML = "sum is =" + x;

function sum(a, b) {
    return a + b;
}

const car = {
    name: "altroz",
    color: "black",
    engineType: "BS6",
    model: "top",
};

document.getElementById("obj").innerHTML =
    `color of car  <span style="font-weight: bold;"
    > ${car.name}  </span> is  <span style= "font-weight: bold;"
    > ${car.color}</span>`;


// ;