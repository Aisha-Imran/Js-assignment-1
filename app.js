//Javascript Assi#1
//Chapter#1

//Question#1
//alert("hello");

//Question#2
//alert("Please enter a valid password")

//Question#3
 //alert("Welcome to Js Land.."+'<br/>' +"Happy Coding!")

 //Question#4
//  alert("Welcome to Js Land")
//  alert("Happy coding")
 
//chapter2
//Question#1
var userName;

//Question#2
var myName="Ayesha Imran"


//Question#3 (a-b)
var message="hello world"
alert(message)

//Question#4
var Name="Joe"
alert(Name)

var Age="15 years"
alert(Age)

var message="Certified Mobile Aplication Development"
alert(message)

//Question#5
var message="pizza"+"\n"+"pizz"+"\n"+"piz"+"\n"+"pi"+"\n"+"p"
console.log(message)
alert(message)

//Question#6
var email="My email address is ashi.sa@gmail.com"
alert(email)

//Question#7
var book="A smarter way to learn JavaScript"
alert(book)

//Question#8
document.write("Yeh! I can write html through javascript")

//Question#9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//Chapter#3
//Question#1
var age="I am 30 years old."
alert(age)

//Question#2
var track="You have visited this website 14 times."
alert(track)

//Question#3
document.write("My birth year is 1990")

//Question#4
var  VisitorName="jhon doe"
var ProductTitle="T.shirt"
var Quantity=5
document.write(VisitorName+" "+"ordered"+"  "+Quantity+" "+ProductTitle)

//Chapter#4
//Question#1
var variable1="hello world"
var variable2="hi"
var variable3="one1"

//Question#2
var legal="a1,$,_a,"
var illegal="1a,2,#, % ,"


//Question#3
document.write("Rules for naming JS variables")
document.write("A variable names can only contain numbers,_ and $.For example $my_1stVariable ")
document.write("Variable must begin with letter, $ or _.For example:$name,_name or name.")
document.write("Variable names are case sensitive.")
document.write("Variable names should not be JS keywords.")

//Chapter#4
//Question#1
var number1=4
var number2=3
var sum=number1+number2
alert(sum)

//Question#2
// var number1=4
// var number2=3
var sum=number1-number2
alert(sum)

// var number1=4
// var number2=3
var product=number1**number2
alert(product)

// var number1=4
// var number2=3
var remainder=number1/number2
alert(remainder)


var modulus=number1%number2
alert(modulus)

//Q2

var a;
console.log(a)
a=5 //5
console.log("value after initilization is"+a)
a++; //6
console.log(a)
a=a+7
console.log(a) //13
a--; //12
console.log(a)
a=a%3
console.log(a) //0
//Q3
var cost_of_ticket=600
var noOfTicket=5;
var TotalCost=cost_of_ticket*5;
document.write("Total cost to buy 5 tickets is 3000P PKR")

//Question5
var TableNo=4;
var n1="4*1="+TableNo*1;
 
var n2="4*2="+TableNo*2;
 
var n3="4*3="+TableNo*3;
 
var n4="4*4="+TableNo*4;
 
var n5="4*5="+TableNo*5;
 
var n6="4*6="+TableNo*6;
 
var n7="4*7="+TableNo*7;
 
var n8="4*8="+TableNo*8;
 
var n9="4*9="+TableNo*9;
 
var n10="4*10="+TableNo*10;
 
document.write(n1+"<br/>"+n2+"<br/>"+n3+"<br/>"+n4+"<br/>"+n5+"<br/>"+n6+"<br/>"+n7+"<br/>"+n8+"<br/>"+n9+"<br/>"+n10+"<br/>") 

//Q6
var  Temp_Farhenhite=30
var Temp_celcius=50
var FarToCel=((Temp_Farhenhite-32)*5)/9
var celT0Far=((Temp_celcius*9)/5)+32
document.write(Temp_Farhenhite+"F"+"is"+FarToCel+"C"+"<br/>"+Temp_celcius+"C"+"is"+celT0Far +"F") 

//Question#7
var PriceItem1=650
var PriceItem2=100
var Quantity_item1=PriceItem1*3
var Quantity_item2=PriceItem2*7
var Shipping_charges=100
var  TotalCost=Quantity_item1+Quantity_item2+Shipping_charges
document.write("Total cost of your order is"+TotalCost)

//Question#8
var Total_marks=980
var Marks_obtained=804
var Percentage=Marks_obtained/Total_marks
var totalPercent=Percentage*100
console.log(totalPercent)

//Question#9
var One_Us_dollar=104.80
var One_Saudi_Riyal=28
var Us_10_dollars=One_Us_dollar*10
var Saudi_Riyals_25=One_Saudi_Riyal*25
var totalRup=Us_10_dollars+Saudi_Riyals_25
console.log("total currency in PKR"+totalRup)

//Question#10
var Num=10
var bodmas=((Num+5)*10)/2
console.log(bodmas)

//Question#11
var Current_year=2022
var Birth_year=2000
console.log(Current_year)
console.log(Birth_year)
console.log(Current_year-Birth_year)

//Question#12
var radius=5
var circumference=2*3.142*radius
var area_of_circle=(radius**2)*3.142
console.log(radius)
console.log(circumference)
console.log("The area is"+" "+area_of_circle)

//Question#13
var favouriteSnack='Chips'
var currentAge=15
var estimatedMaximum_age=65
var amount_of_snacks_per_day=3
var amount_of_snacks=(estimatedMaximum_age-currentAge)*3
console.log("You will need"+" "+amount_of_snacks+" "+favouriteSnack)

//Chapter#6
//Maths Expression

//Question#1
var a=10
document.write( "<br/>"+"The value of a is:"+a )

++a
document.write("<br/>"+"The value of ++a is"+a)
document.write("<br/>"+"Now the value of a:"+a)
document.write("<br/>"+"The value of a++ is"+a)
a++
document.write("<br/>" +"Now the value of a:"+a)
--a


document.write("<br/>" +"Now the value of --a:"+a)
document.write("<br/>"+"Now the value of a is 11")


document.write("<br/>" +"The value of a-- is"+a)
a--
document.write("<br/>" +"The value of a-- is"+a)

//Question#2
var a=2
var b=1
//  var result1=--a - --b + ++b + b--;
//  alert(result1)
--a;
console.log(a)
--b;
console.log(b)
var result=a-b
console.log(result)
++b;
result=result+b
console.log(result)
--b;
result=result+b
console.log(result)

var usrname=prompt("enter your name")
alert(usrname)

//Q5
var multable=prompt("enter table no")
for(var i=1;i<=12;i++){
    if(multable==""){
        var tresult=5*i;
        console.log(5+"*"+i+"="+tresult)
    }
    else{
        var result2=multable*i;
        console.log(multable+"*"+i+"="+result2)
    }
}