console.log('test');
var c = console;

//files when DOM is rendered
window.onload = function() 
{
    var elem = document.getElementById("main");
    log(elem);
}
//a  function
function log(val)
{
    c.log(val);
}

// executed function
//log('hello');
//log(1);

// executed before page is done
var elem = document.getElementById("main");
log(elem);
