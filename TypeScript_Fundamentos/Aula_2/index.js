var input1 = document.getElementById("num_1");
var input2 = document.getElementById("num_2");
var button = document.getElementById("button");

function sum(a, b) {
    return a + b;
}

button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
