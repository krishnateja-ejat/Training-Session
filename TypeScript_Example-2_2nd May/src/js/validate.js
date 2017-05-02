/**
 * Created by MINNU on 5/2/2017.
 */
$(document).ready(function()
{
    $('#btn').click(function(){

        var ani=$('#ani').val();
        if(ani=="Tourtoise")
        {
            var name=ani;
            var tor=new Tourtoise(name);
            var speed=tor.calcul();
            alert("the speed is "+speed);
        }
        else
        {
            var name=ani;
            var rab=new Rabbit(name);
            var speed=rab.calcul();
            alert("the speed is "+speed);
        }
    })
})