'use strict'
var c = console;

var callback = function(msg)
{
    c.log(msg);
}

function runCallback (cb)
{
    cb('test');
}

runCallback(callback);
runCallback(function(x){c.log(x+x);})