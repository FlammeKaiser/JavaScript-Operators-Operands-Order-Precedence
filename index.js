
let s1 = document.getElementById('sub1');
let s2 = document.getElementById('sub2');
let s3 = document.getElementById('sub3');
let s4 = document.getElementById('sub4');
let s5 = document.getElementById('sub5');


let button = document.getElementById('calculate');

function calc(){
   
   const output = (parseInt(s1.value) +  parseInt(s2.value) + parseInt(s3.value) + parseInt(s4.value) + parseInt(s5.value))/5

   document.getElementById('output').innerHTML = "<h1>" + "Your average is " + output + "</h1>";

}

button.addEventListener("click", calc);



