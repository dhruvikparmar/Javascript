/*Q1: Write a program to take marks as input and display the grade based on the following criteria:

90-100 → A+
80-89 → A
70-79 → B
60-69 → C
50-59 → D
Below 50 → Fail
*/

// let a=prompt("Enter Marks between 1-100:")
// if(a>=90 && a<=100)
// {
//     document.write("Your Grade is A+\n")
// }
// else if(a>=80 && a<=89)
// {
//     document.write("Your Grade is A\n")
// }
// else if(a>=70 && a<=79)
// {
//     document.write("Your Grade is B\n")
// }
// else if(a>=60 && a<=69)
// {
//     document.write("Your Grade is C\n")
// }
// else if(a>=50 && a<=59)
// {
//     document.write("Your Grade is D\n")
// }
// else if(a<=50)
// {
//     document.write("Your are Fail...\n")
// }
// else
// {
//     alert("Please Enter markrs between 1 to 100")
// }


/* Q2: Write a program that takes the number of electricity units consumed and calculates the bill based on these conditions:
Up to 100 units → ₹5 per unit
101 to 300 units → ₹7 per unit
Above 300 units → ₹10 per unit
Add ₹50 fixed charge to the final bill.
*/
// let b=prompt("\nEnter Electricity Units:")
// if(b>0 && b<=100)
// {
//     let c=b*5
//     let d=c+50
//     document.write("\nYour Electricity is",d)
// }
// else if(b>=101 && b<=300)
// {
//     let c=b*7
//     let d=c+50
//     document.write("\nYour Electricity is",d)
// }
// else if(b>=300)
// {
//     let c=b*10
//     let d=c+50
//     document.write("\nYour Electricity is",d)
// }
// else
// {
//     alert("Please Enter Electricity Units ubove 0")
// }


/*
 Q3: Write a program to calculate Simple Interest using the formula:
			𝑆𝐼=𝑃×𝑅×𝑇/100
Take Principal (P), Rate (R), and Time (T in years) as inputs and display the interest amount.
*/
// let p=prompt("Enter Priciple:")
// let r=prompt("Enter Rate in %:")
// let t=prompt("Enter NO. of Year:")
// let si=p*r*t/100
// document.write("Interest Amount is ",si)


/*
Q4: Write a program to calculate Net Salary of an employee after deducting tax:
    If Salary ≤ ₹50,000 → No Tax
    If Salary is ₹50,001 - ₹1,00,000 → 10% Tax
    If Salary is more than ₹1,00,000 → 20% Tax
*/
// let a=prompt("Enter Salary in (₹):")
// if(a>=1 && a<=50000)
// {
//     document.write("Your Net Salary after deducting tax is ",a)
// }
// else if(a>=50001 && a<=100000)
// {
//     let b=a*10/100
//     let c=a-b
//     document.write("Your Net Salary after deducting tax is ",c)
// }
// else if(a>100000)
// {
//     let b=a*20/100
//     let c=a-b
//     document.write("Your Net Salary after deducting tax ",c)
// } 
// else
// {
//     alert("Please enter salary above 0")
// }


/*
 Q5: Check number is even or odd ? 
*/
// let a=prompt("Enter Digit:")
// if(a%2==0)
// {
//     document.write(a," is even")
// }
// else
// {
//     document.write(a," is odd")
// }


/*
 Q6:  : Write a JavaScript program that takes a single character as input and checks whether it is a vowel or not.
 Vowels: a, e, i, o, u
*/
// let a=prompt("Enter Character:")
// if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u' || a=='A'||a=='E'||a=='I'||a=='O'||a=='U')
// {
//     document.write(a," is vowel")
// }
// else
// {
//     document.write(a," is not vowel")
// }