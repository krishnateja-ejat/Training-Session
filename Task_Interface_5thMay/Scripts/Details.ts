/**
 * Created by semantic on 5/5/17.
 */
interface details
{
    firstname:string,
    lastname:string,
    age:number,
    address:string
}
let Arr:any=[];
class employee implements details
{

    type_work:string;
    Designation:string;

    constructor(public firstname,public lastname,public age,public address,type_work,Designation)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.address=address;
        this.type_work=type_work;
        this.Designation=Designation;

    }

    add_off=(emp:employee):any=>
    {
        Arr.push(emp);
        return Arr;
    }



}
let c=0;
let add=()=>
{

    let fname=(<HTMLInputElement>document.getElementById("f_name")).value;
    let lname=(<HTMLInputElement>document.getElementById("l_name")).value;
    let age=parseInt((<HTMLInputElement>document.getElementById("age")).value);
    let address=(<HTMLInputElement>document.getElementById("address")).value;
    let work;
    if ((<HTMLInputElement>document.getElementById("dev")).checked)
    {
        work ="Developing";
    }
    else if ((<HTMLInputElement>document.getElementById("tes")).checked)
    {
        work="Testing";
    }
    else if ((<HTMLInputElement>document.getElementById("netw")).checked)
    {
        work="NetWorking";
    }
    let Designation=(<HTMLInputElement>document.getElementById("select")).value
    let resetForm = <HTMLFormElement>document.getElementById("myForm");
    resetForm.reset();
    let emp=new employee(fname,lname,age,address,work,Designation);
    var x=emp.add_off(emp);
}
let sort=()=> {
    function compare(a, b) {
        const genreA = a.firstname.toUpperCase();
        const genreB = b.firstname.toUpperCase();

        var comparison = 0;
        if (genreA > genreB) {
            comparison = 1;
        } else if (genreA < genreB) {
            comparison = -1;
        }
        return comparison;
    }

    Arr.sort(compare)
    this.display()
}
let display=()=>
{

    for(var i=0;i<Arr.length;i++)
    {
        console.log(Arr[i].firstname);
        console.log(Arr[i].lastname);
        console.log(Arr[i].age);
        console.log(Arr[i].address);
        console.log(Arr[i].type_work);
        console.log(Arr[i].Designation);
    }
}