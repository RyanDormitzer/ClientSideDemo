'use strict'
var c = console;
window.onload = function()
{

var obj = document.getElementById('update');
var list = document.getElementById('list')
obj.addEventListener('click', function(event)
{
    var update = document.getElementById('todo');
    var todo = document.createElement('li');
    var del = document.createElement('button');
    todo.innerText=update.value;
    list.appendChild(todo);
    list.appendChild(del);
    del.addEventListener('click', function(event)
{
    list.removeChild(todo);
    list.removeChild(del);
})
    
})

}