// CHP 38 TO 42
// QS NO 1

// function Power(a,b){
//     var a = +prompt("Enter first number");
//     var b = +prompt("Enter second number");
//     var value = a ** b; 
//     return value
// }
// alert(Power());

// QS NO 2
// function leapYear(){
//     var year = +prompt("Enter a Year");
//     if(year == 1700 || year == 1800 || year == 1900){
//         alert(year + " is not a Leap Year"); 
//     }
//     else if(year % 4 == 0){
//         alert(year + " is a Leap Year");
//     }
//     else{
//         alert(year + " is not a Leap Year");
    
//     }
// }
// leapYear();


// QS NO 3
// function triangle(a,b,c){
//     function Svalue(){
//        var s = (a + b + c)/2;
//        return s;
//     }
//     var area =Svalue() * (Svalue() - a) * (Svalue() - b) * (Svalue() - c);
//     var result = Math.sqrt(area);
//     return result;
// }
// var a = +prompt("Enter first side of triangle");
// var b = +prompt("Enter second side of triangle");
// var c = +prompt("Enter third side of triangle");
// alert(triangle(a,b,c));

// QS NO 4
// function marks($1  , $2 , $3){
//     if(sub1 <= 100 && sub2 <= 100 && sub3 <=100){
//         function avg(){
//             var average = ($1 + $2 + $3)/3;
//             return average;
//         } 
//         function percentage(){
//             var per = (($1 + $2 + $3)/300)*100;
//             return per;
//         }
//         alert("Your average is :" +avg() +"\n" + "Your percentage is: "+ percentage() +"%") ;
//     }
//     else{
//         alert("Enter appropiate marks!")
//     }
// }
// var sub1 = +prompt("Enter marks in subject 1");
// var sub2 = +prompt("Enter marks in subject 2");
// var sub3 = +prompt("Enter marks in subject 3");
// marks(sub1 , sub2 , sub3);

// QS NO 5
// function check(value,index){
//     for(var i = 0; i < value.length ; i++){
//         if(value[i] == index){
//             var a = i;
//             return a;
//         }
//     }
// }
// var value = "pakistan"; 
// var index = "s";
// alert(check(value , index));

// QS NO 6
// function del(){
//     var input = prompt("Enter a sentence");
//     for(var i=0 ; i<input.length ; i++){
//         if(input[i] === "a" || input[i] === "A" || input[i] === "e" || input[i] === "E" || input[i] === "i" || input[i] === "I" || input[i] === "o" || input[i] === "O" || input[i] === "u" || input[i] === "U"){
//             var inc = input.slice( 0 , i );
//         }
//         else{
//             document.write(input[i])
//         }
//     }
// }

// del();

// QS NO 7
// var data = "Please read this application and give me gratuity";
// var count = 0;
// function noOfOccurrance(text){
//     for(i=0 ; i<data.length ;i++){
//         switch(text.slice(i , i+2)){
//             case "aa":
//                 count++
//                 break;
//             case "ae":
//                 count++
//                 break;
//             case "ao":
//                 count++
//                 break;
//             case "ai":
//                 count++
//                 break;      
//             case "au":
//                 count++
//                 break;       
//             case "ea":
//                 count++
//                 break;
//             case "ee":
//                 count++
//                 break;
//             case "eo":
//                 count++
//                 break;
//             case "ei":
//                 count++
//                 break;      
//             case "eu":
//                 count++
//                 break;
//             default:
//                 alert("No vowel")      
//         }
//     }
// }
// alert(noOfOccurrance());



// QS NO 8
// function distance(dis){
//     function meter(){
//         var meters = dis / 1000;
//         return meters;
//     }

//     function feet(){
//         var feets = dis *3281;
//         return feets;
//     }

//     function inches (){
//         var inch = dis * 39370;
//         return inch;
//     }

//     function cm(){
//         var centi = dis * 10000;
//         return centi;
//     }
//     alert( value + "km = " +meter() +"m" +"\n"+value + "km = " +feet() + "ft" +"\n"+value + "km = "+inches() +"inch" +"\n"+ value + "km = "+cm() +"cm")
// }
// var value = +prompt("Enter the distance in km");
// distance(value);

// QS NO 9
// function payment(){
//     if(hours > 40){
//         alert("Please wait a moment! Your overtime pay is being processed :)");
//     }
//     else if(hours == 40){
//         alert("Just work for another hour to get overtime pay...");
//     }
//     else if(hours < 40){
//         alert("Sorry! Keep working for couple of more hours to get paid for overtime :'(");
//     }
// }
// var hours = +prompt("Please enter your worked hours ");
// payment();

// QS NO 10
// function amount(){
//     var input = +prompt("Enter the amount to withdraw!!");
//     if(input.length < 4){
//         var input1 = input/100;
//         var input2 = input/50;
//         var input3 = input/10;
//         document.write("You will have " + input1 +" hundred notes "+input2 +" fifty notes "+ input3 +" ten notes")
//     }
//     else{
//         alert('Please enter amount in Hundreds ')
//     }
// }
// amount()

// CHP 43 TO 48
// QS NO 2
function mbl(){
    alert("Thanks for purchasing a phone from us")
}

// QS NO 3
var arr = ["0" , "1" ,"2", "3"];
function button1(){
    var in1 = document.getElementById("in1");
    arr.splice(0,1);
    in1.innerHTML = arr.indexOf("0");
    document.getElementById("row1").remove(); 
}
function button2(){
    var in1 = document.getElementById("in2");
    arr.splice(1,1);
    in1.innerHTML = arr.indexOf("1");
    document.getElementById("row2").remove(); 
}
function button3(){
    var in1 = document.getElementById("in3");
    arr.splice(2,1);
    in1.innerHTML = arr.indexOf("2");
    document.getElementById("row3").remove();   
}
function button4(){
    var in1 = document.getElementById("in4");
    arr.splice(3,1);
    in1.innerHTML = arr.indexOf("3");
    document.getElementById("row4").remove();   
}

// QS NO 5
var count = 0;
function inc(){
    count++;
    var newvar = document.getElementById("count");
    newvar.innerHTML = count;
}
function dec(){
    if(count <=0 ){
        count=0;
    }
    else{
        count--;
        var newvar = document.getElementById("count");
        newvar.innerHTML = count;
    }
}

// CHP 49 TO 52
// QS NO1
function submit(){
    var one = document.getElementById("firstname");
    one1 = one.value;
    var two = document.getElementById("lastname");
    two1 = two.value;
    var three = document.getElementById("email");
    three1 = three.value;
    var four = document.getElementById("pass");
    four1 = four.value;
    var five = document.getElementById("confirm");
    five1 = five.value;
    document.write("First Name : " + one1 + "<br>");
    document.write("Last Name : " + two1 + "<br>");
    document.write("Email : " + three1 + "<br>");
    document.write("Password : " + four1 + "<br>");
    document.write("Confirm Password : " + five1 + "<br>");
}

// QS NO2
function para(){
    var data ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas dolores saepe libero perspiciatis similique. Perferendis, et! Nostrum itaque delectus dolor, sit odio fuga alias voluptatibus ea ullam, blanditiis commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas dolores saepe libero perspiciatis similique. Perferendis, et! Nostrum itaque delectus dolor, sit odio fuga alias voluptatibus ea ullam, blanditiis commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas dolores saepe libero perspiciatis similique. Perferendis, et! Nostrum itaque delectus dolor, sit odio fuga alias voluptatibus ea ullam, blanditiis commodi? "
    var data1 = document.getElementById("txt");
    data1.innerHTML = data;
}

// QS NO 3
function delete1(id){
    var row1 = document.getElementById(id).remove();
}
function edit1(){
    var form = document.getElementById("hidden1");
    form.style.visibility = "visible";
    document.getElementById("hidtxt1").value = document.getElementById("txt1").value
    document.getElementById("hidtxt2").value = document.getElementById("txt2").value
}
function edit2(){
    var form = document.getElementById("hidden2");
    form.style.visibility = "visible";
    document.getElementById("hidtxt3").value = document.getElementById("txt3").value
    document.getElementById("hidtxt4").value = document.getElementById("txt4").value
}
function edit3(){
    var form = document.getElementById("hidden3");
    form.style.visibility = "visible";
    document.getElementById("hidtxt5").value = document.getElementById("txt5").value
    document.getElementById("hidtxt6").value = document.getElementById("txt6").value
}

// CHP 53 TO 58 
// QS NO 1
function showImage(e){
    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src
    
}

// QS NO 2
function zoomIn(){
    var para = document.getElementById("para");
    para.style.fontSize = "30px"
}
function zoomOut(){
    var para = document.getElementById("para");
    para.style.fontSize = "20px"
}

// CHP 58 TO 67
// QS NO 1

// i)
var last = document.getElementById("main-content");

// ii)
var main = document.getElementsByClassName("render");
console.log(main);

// iii)
for(i=0; i<main.length;i++){
    var text = main[i].innerHTML;
    console.log(text);
}

// iv)
var firstName = document.getElementById("first-name");
firstName.value = "Ruba" ;

// v)
var lastName = document.getElementById("last-name");
lastName.value = "Rasheed" ;

// vi)
var Address = document.getElementById("Email");
Address.value = "xyz@gmail.com";


// QS NO 2
// i)
var forms = document.getElementById("form-content");
console.log(forms.nodeType);

//ii)
var input = document.getElementById("last-name");
console.log(input.value);
console.log(input.nodeType);

// iii)
var update = document.getElementById("last-name");
update.value = "Khan";
console.log(update.value)

// iv)
console.log(last.firstChild);
console.log(last.lastChild);

// v)
console.log(lastName.previousSibling);
console.log(lastName.nextSibling);

// vi)
console.log(Address.parentNode);
console.log(Address.nodeType);

