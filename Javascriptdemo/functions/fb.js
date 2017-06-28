var c = console;
let a=0
for (let i=1; i<=15; i++)
{
    a=i;
    if (i%3==0)
    {
        i='Fizz';
        c.log(i);
        i=a;
    }
    else if (i%5==0)
    {
        i='Buzz';
        c.log(i);        
        i=a;
    }
    
    else 
    {
        c.log(i);
    }
    if (i%15==0)
    {
        i='FizzBuzz';
        c.log(i);        
        i=a;
    }
}