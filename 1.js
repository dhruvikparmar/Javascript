// console.log("Hello");
// alert("Do you want to load this ?")
// confirm("Is this you ?")
// let a="parmar"
//let a="dhruvik"- ReDeclaration not posible
// let c=a+b
// console.log(c)
// let p=prompt("Enter Your Name :")
// let  b=prompt("Enter B Number:")
// console.log((a!=10)?"true":"false");
let  a=prompt("Enter \n1 For Pizza\n2 For Burger\n3 Coldrinks")
if(a==1)
{
    document.write("Welcome To Lappinoz Pizza 🍕")
    let b=prompt("Enter \n1 For Margrita Pizza\n2 For Italien Pizza:")
    if(b==1)
    {
        console.log("You have ordered Margrita Pizza 🍕")
    }
    else if(b==2)
    {
        console.log("You have ordered Italien Pizza 🍕")
    }
    else
    {
        console.log("Sorry!! wrong Choice")
    }
}
else if(a==2)
{
    document.write("Welcome To Burger King 🍔")
    let c=prompt("Enter\n1 For Veg. Burger\n2 For Custamized Burger:")
    if(c==1)
    {
        console.log("You have ordered Veg. Burger 🍔")
    }
    else if(c==2)
    {
        console.log("You have ordered Custamized Burger 🍔")
    }
    else
    {
        console.log("Sorry!! wrong Choice")
    }
}
else if(a==3)
{
    document.write("Welcome Himalaya Coldrinks 🥤")
    let d=prompt("Enter\n1 For Cola\n2 For Maja\n3 For Sprite")
    if(d==1)
    {
        console.log("You Have Ordered Cola 🥤")
    }
    else if(d==2)
    {
        console.log("You Have Ordered Maja 🥤")
    }    
    else if(d==3)
    {
        console.log("You Have Ordered Sprite 🥤")
    }
    else
    {
        console.log("Sorry!! wrong Choice")
    }
}
else    
{
    console.log("Sorry!! wrong Choice");
}