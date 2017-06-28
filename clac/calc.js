'use strict';

var c = console;

window.onload = function()
{
    var num1 = document.getElementById('tb');
    var num2 = document.getElementById('tb1');
    var add = document.getElementById('add');
    var sub = document.getElementById('sub');
    var mul = document.getElementById('mul');
    var div = document.getElementById('div');

    add.addEventListener('click', function(event){
    var add = num1.value;  
    var add1 = num2.value; 
    var a1 = parseInt(add);
    var a2 = parseInt(add1);     
    c.log(a1+a2);
});
sub.addEventListener('click', function(event){
    var sub = num1.value;  
    var sub1 = num2.value; 
    var s1 = parseInt(sub);
    var s2 = parseInt(sub1);     
    c.log(s1-s2);
});
mul.addEventListener('click', function(event){
    var mul = num1.value;  
    var mul1 = num2.value; 
    var m1 = parseInt(mul);
    var m2 = parseInt(mul1);     
    c.log(m1*m2);
});
div.addEventListener('click', function(event){
    var div = num1.value;  
    var div1 = num2.value; 
    var d1 = parseInt(div);
    var d2 = parseInt(div1);     
    c.log(d1/d2);
    });
};