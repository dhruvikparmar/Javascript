
class Vehical
{
    constructor()
    {
        this.stat='Gujrat';
        this.stat2='MP';
        this.number=22;
        this.number2=33;
        this.year=2025
    }
    vehical()
    {
        document.write("Vehical's Types")
    }       
}
class Fourwheel extends Vehical
{
    constructor(stat)
    {
        super(stat);
    }
    name()
    {
        document.write(`<br>This fourwheel is from ${this.stat} & it's stat code ${this.number}`)
    }
}
class Toyato extends Fourwheel
{
    toyato()
    {
        document.write("<br>This is Toyato's Fortuner")
    }
}
class Fortuner extends Toyato
{
    model()
    {
        document.write(`<br>This fortuner's model is from year ${this.year}`)
    }
}
class Twowheel extends Vehical
{
    name()
    {
        document.write(`<br>This Twowheel is from ${this.stat2} & it's stat code ${this.number2}`);
    }
}
class Bajaj extends Twowheel
{
    bajaj()
    {
        document.write("<br>This is Bajaj's V15");
    }
}
class v15 extends Bajaj
{
    
    model()
    {
        document.write(`<br>This v15's model is from year ${this.year}`)
    }
}


let obj=new Fortuner();
obj.vehical();
obj.toyato();
obj.name();
obj.model();
let obj2=new v15();
obj2.bajaj()
obj2.name();
obj2.model();

