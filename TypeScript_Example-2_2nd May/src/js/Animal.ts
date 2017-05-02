/**
 * Created by MINNU on 5/2/2017.
 */
 class Animal{
     Name:string="";
     Speed:number=10;
    constructor(Name:string) {
        this.Name=Name;
        alert(this.Name)
    }

}
class Tourtoise extends Animal{

    calcul():number{
       let speed:number=6
     var c=this.Speed-speed;
        return c;
    }
}
class Rabbit extends Animal{
    calcul():number {
        let speed:number=10
        return this.Speed * speed;
    }
}