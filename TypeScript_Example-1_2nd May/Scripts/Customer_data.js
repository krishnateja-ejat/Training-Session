/**
 * Created by MINNU on 5/2/2017.
 */
$(document).ready(function() {
    $('#btn').click(function(){
       var name=$('#name').val();
        var age=$('#age').val();
        var address=$('#address').val();
        var phone=$('#phone').val();


        var cust=new Customer();
        cust.Name=name;
        cust.age=age;
        cust.address=address;
        cust.phone=phone;
        try
        {
            var val=cust.validate();

            if(val==true)
            {
                var len=cust.len();
                $('#len').html(len);

                var conca=cust.concat();
                $('#sen').html(conca);

            }

        }
        catch (ex)
        {
            alert(ex);
        }

    })

});