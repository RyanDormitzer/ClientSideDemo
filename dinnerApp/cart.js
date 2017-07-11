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
var addTe = document.getElementById('addTe');
var tota = document.getElementById('tota');
var getT = document.getElementById('getT');
var del = document.createElement('button');
del.innerText='Delete';
var Ocart = [];
var cartT =[];
window.onload = function(){

/*function getTotal(total)
{
    for(var i=0; i < cartT.length; i++)
    {
        total = total + cartT[i];
    }
    return(total);
} */


   
    addN.addEventListener('click', function(event)
    {
        var item = document.createElement('li');
        item.innerText=Nach.innerText;
        cart.appendChild(item);
      //  cart.appendChild(del)
        cartT.push(5.99);
        Ocart.push(item.innerText);
    });
    addM.addEventListener('click', function(event)
    {
         var item = document.createElement('li');
        item.innerText=Mot.innerText;
        cart.appendChild(item);
       // cart.appendChild(del)
        cartT.push(5.00);
        Ocart.push(item.innerText);
    });
    addB.addEventListener('click', function(event)
    {
         var item = document.createElement('li');
        item.innerText=burg.innerText;
        cart.appendChild(item);
       // cart.appendChild(del)
        cartT.push(8.99);
        Ocart.push(item.innerText);
    });
    addT.addEventListener('click', function(event)
    {
         var item = document.createElement('li');
        item.innerText=tom.innerText;
        cart.appendChild(item);
      //  cart.appendChild(del)
        cartT.push(7.99);
        Ocart.push(item.innerText);
    });
addS.addEventListener('click', function(event)
    {
         var item = document.createElement('li');
        item.innerText=soda.innerText;
        cart.appendChild(item);
       // cart.appendChild(del);
        cartT.push(1.99);
        Ocart.push(item.innerText);
    });
    addTe.addEventListener('click', function(event)
    {
        var item = document.createElement('li');
        item.innerText=tea.innerText;
        cart.appendChild(item);
       // cart.appendChild(del)
        cartT.push(2.00);
        Ocart.push(item.innerText);
    });
 /* getCart static function(){
        var item = document.createElement('li');
for(var i = 0; i < Ocart.length; i++)
{
    item.innerText = Ocart[this[i]];
    cart.appeendChild(item);
}
return Ocart;
    }*/

getT.addEventListener('click', function(event)
{
    total = 0;
    //getTotal();
    //
     for(var i=0; i < cartT.length; i++)
    {
        total = total + cartT[i];
    }
    c.log(total);
    tota.innerText ='$' + total;
});
/*del.addEventListener('click', function(event)
{
    cart.removeChild(item);
})*/
}

