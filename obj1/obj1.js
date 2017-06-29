'use strict'
var c = console;
window.onload = function()
{
    function Shape(type, hight, width)
    {
        this.type = type;
        this.hight = hight;
        this.width = width;
    };

    var triangle = new Shape("triangle", 3, 4);

    Shape.prototype.Area = function()
    {
        return this.hight * this.width;
    }
    var square = new Shape("square", 2, 2);
    var rectangle = new Shape("rectangle", 2, 4);
    

    c.log(square.Area());
    c.log(rectangle.Area());
    c.log(triangle.Area());

    String.prototype.prefix = function(msg)
    {
        return msg+ " "+ this;
    }
    c.log('World'.prefix('Hello'));
};