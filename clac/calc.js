'use strict';

var c = console;

window.onload = function()
{
    var btnElem = document.getElementById('btnGo');
    var inputElem = document.getElementById('num');
     var inputElem1 = document.getElementById('num1');
     var addc = document.getElementById('add');
     var subc = document.getElementById('sub');
     var mulc = document.getElementById('mul');
     var divc = document.getElementById('div');
    var clog = function(){
        c.log(inputElem.value);
    }
    var clog1 = function(){
        c.log(inputElem1.value);
    }
    var clogadd = function(){
        c.log(addc.value);
    }
    var clogsub = function(){
        c.log(subc.value);
    }
    
    var clogmul = function(){
        c.log(mulc.value);
    }
    
    var clogdiv = function(){
        c.log(divc.value);
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
    add.addEventListener("click", clogadd);
    add.addEventListener('click', function(event){
        var add = document.getElementById('add');
        var addval = add.value;
    });
    sub.addEventListener('click', clogsub);
    sub.addEventListener('click', function(event){
        var sub = document.getElementById('sub');
        var subval = sub.value;
    });
    mul.addEventListener('click', clogmul);
    mul.addEventListener('click', function(event){
        var mul = document.getElementById('mul');
        var mulval = mul.value;
    });
    div.addEventListener('click', clogdiv);
    div.addEventListener('click', function(event){
        var div = document.getElementById('div');
        var divval = div.value;
    });
    inputElem.addEventListener('keypress', clog);
};