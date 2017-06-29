'use strict'
var c = console;

function outer()
{
    var count = 0;
    return {
        addtoCount: function(i) {count += i;},
        getCount: function() {return count;}
    };
}function person(fname, lname)
{
    return { getFullName: function() {return fname + ' ' + lname;}}
}

var Ryan = person('Ryan', 'D')

var counter = outer();
c.log(counter.getCount());
c.log(counter.addtoCount(10));
c.log(counter.getCount());
c.log(Ryan.getFullName());