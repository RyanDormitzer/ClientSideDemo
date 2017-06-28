'use strict';

var c = console;

window.onload = function()
{
    var btnElem = document.getElementById('btnGo');
    

    var clog = function(){
        c.log(inputElem.value);
        
    }

    //add click event to button
    btnElem.addEventListener("click", clog);
    btnElem.addEventListener('click', function(event){
        var numElem = document.getElementById('num');
        var val = numElem.value;
        var numElem1 = document.getElementById('num1');
        var val1 = numElem1.value;

        var num = parseInt(val);
        c.log(num);
        var num1 = parseInt(val1);
        c.log(num1);
        
    });
    inputElem.addEventListener('keypress', clog);
};