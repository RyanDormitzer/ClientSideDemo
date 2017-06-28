'use strict';

var c = console;

window.onload = function()
{
    var list = document.getElementById('list');
    list.addEventListener("click", function(event){
        c.log(event.target.innerText);
    });
};