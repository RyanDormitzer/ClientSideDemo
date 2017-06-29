'use strict'
var c = console;
window.onload = function()
{
    var rect = new rectangle(3,5);
    c.log(rect.Area());
};

function Shape(hight, width)
{
    this.hight = hight;
    this.width = width;
}

function rectangle(height, width)
{
    Shape.call(this, height, width)
    this.Area = function()
    {
        return height * width;
    }
}

function square(length)
{
    rectangle.call(this, length, length);
}

function triangle(hight, width)
{
    this.prototype = new rectangle(hight,width);
    this.getArea = function()
    {
        return this.prototype.Area()/2;
    }
}