(function(module2)
{
    c.log('man module running');
    c.log(module2.publicVar);
    module2.dopost(function(data)
    {
        c.log(data);
    });
})(window.app2 ||(window.app2 ={}));