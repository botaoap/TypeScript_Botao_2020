const input1 = document.getElementById("num_1");
const input2 = document.getElementById("num_2");
const button = document.getElementById("button");

function sum(a,b){
    return a + b;
}

button.addEventListener("click", function(){
    
    console.log(sum(input1.value, input2.value));

})