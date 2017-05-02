/**
 * Created by MINNU on 5/2/2017.
 */
class Customer{
    Name:string="";
    age:number=0;
    address:string="";
    phone:number=null;
    validate():boolean
    {
        if(this.Name==null||this.age==0||this.address==null||this.phone==0)
        {
            throw "All The Fields Are Requried";
            return false;
        }
        return true;
    }
     len():number
     {
         return this.Name.length;
     }
    concat():string
    {

        return "My name is "+this.Name+",age is "+this.age+",address is "+this.address+"and my phone number is "+this.phone
    }

}