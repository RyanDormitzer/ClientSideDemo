'use sctrict'
var c = console;
var total = 0.00;
var Nach = document.getElementById('Nachos');
var Mot  = document.getElementById('Mot');
var burg = document.getElementById('burg');
var tom = document.getElementById('tom');
var soda = document.getElementById('soda');
var tea = document.getElementById('tea');
var cart = document.getElementById('cart');
var addN = document.getElementById('addN');
var addM = document.getElementById('addM');
var addB = document.getElementById('addB');
var addT = document.getElementById('addT');
var addS = document.getElementById('addS');
var addTe = document.getElementById('addte');
var Ocart = [];
var NachP = 5.99;
var MotP = 5.00;
var burgP = 8.99;
var tomP = 7.99;
var sodaP = 1.99;
var teaP = 2.00;
var cartT =[];
var k = 0;
window.onload = function(){

function getTotal(total)
{
    for(var i=0; i < cartT.length; i++)
    {
        total = total + cartT[this[i]];
    }
    return(total);
}


    var item = document.createElement('li');
    addN.addEventListener('click', function(event)
    {
        item.innerText=addN.innerText;
        cart.appeendChild(item)
        push.cartT(5.00);
        push.Ocart(addN.innerText);
        k++;
    })
    addM.addEventListener('click', function(event)
    {
        item.innerText=addM.innerText;
        cart.appeendChild(item)
        push.cartT(5.99);
        push.Ocart(addM.innerText);
        k++;
    })
    addB.addEventListener('click', function(event)
    {
        item.innerText=addB.innerText;
        cart.appeendChild(item)
        push.cartT(8.99);
        push.Ocart(addB.innerText);
        k++;
    })
    addT.addEventListener('click', function(event)
    {
        item.innerText=addT.innerText;
        cart.appeendChild(item)
        push.cartT(7.99);
        push.Ocart(addT.innerText);
        k++;
    })
addS.addEventListener('click', function(event)
    {
        item.innerText=addS.innerText;
        cart.appeendChild(item)
        push.cartT(1.99);
        push.Ocart(addS.innerText);
        k++;
    })
    addTe.addEventListener('click', function(event)
    {
        item.innerText=addTe.innerText;
        cart.appeendChild(item)
        push.cartT(2.00);
        push.Ocart(addTe.innerText);
        k++;
    })
    getCart function(cart){
for(var i = 0; i < Ocart.length; i++)
{
    cart.appeendChild(Ocart[this[i]]);
}
    }
last.addEventListener('click',function(event){
    getCart(last);
})
}

