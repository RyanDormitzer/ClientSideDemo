'use strict'
var c = console;
window.onload = function()
{

var obj = document.getElementById('update');
var list = document.getElementById('list')
var done = document.getElementById('done');
obj.addEventListener('click', function(event)
{
    var update = document.getElementById('todo');
    var todo = document.createElement('li');
    var del = document.createElement('button');
    var check = document.createElement('button');
    var dele = document.createElement('button');
    var un = document.createElement('button');
    todo.innerText=update.value;
    del.innerText='Delete';
    dele.innerText="Delete";
    check.innerText='Done';
    un.innerText="Undo";
    list.appendChild(todo);
    list.appendChild(del);
    list.appendChild(check);
    del.addEventListener('click', function(event)
{
    list.removeChild(todo);
    list.removeChild(del);
    list.removeChild(check);
})
    check.addEventListener('click', function(event)
    {
        list.removeChild(todo);
        list.removeChild(del);
        list.removeChild(check);
        done.appendChild(todo);
        done.appendChild(dele);
        done.appendChild(un);
    })
    dele.addEventListener('click', function(event)
{
    done.removeChild(todo);
    done.removeChild(dele);
    done.removeChild(un);
})
un.addEventListener('click', function(event)
    {
        done.removeChild(todo);
        done.removeChild(dele);
        done.removeChild(un);
        list.appendChild(todo);
        list.appendChild(del);
        list.appendChild(check);
        
    })
})

}