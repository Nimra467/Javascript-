//Javascript crash course assignment 1
//submitted By Nimra Jawed

// Question 1
let num1=+prompt("Enter 1st number: ");
let num2=+prompt("Enter 2nd number: ");
if (num1 > num2){
    console.log(num1+" is greater");
}
else {
    console.log(num2+" is greater")
}

//Question 2

let userNum=+prompt("Enter a number");
if (userNum > 0){
    alert("The sign is +")
}
else {
    alert("The sign is -")
}

// //Question 3

let numOne=+prompt("Enter 1st number");
let numTwo=+prompt("Enter 2nd number");
let numThree=+prompt("Enter 3rd number");
let numFour=+prompt("Enter 4th number");
let numFive=+prompt("Enter 5th number");
if (numOne>=numTwo && numOne>=numThree && numOne >=numFour && numOne>=numFive){
    console.log(numOne +" is greater")
}
else if (numTwo>=numOne && numTwo>=numThree && numTwo >=numFour && numTwo>=numFive){
    console.log(numTwo +" is greater")
}
else if (numThree>=numOne && numThree>=numTwo && numThree >=numFour && numThree>=numFive){
    console.log(numThree +" is greater")
}
else if (numFour>=numOne && numFour>=numTwo && numFour >=numThree && numFour>=numFive){
    console.log(numFour +" is greater")
}
else {
    console.log(numFive+" is greater")
}


// //Question 4
for (let i =0;i<=15;i++){
    if (i%2===0){
        console.log(i +" is even.")
}
    else {
        console.log(i +"is odd.")
    }
}

//  Question 5

let totalMarks = +prompt("Enter your marks obtain: ")
if (totalMarks<60){
    console.log("Grade F");
}
else if(totalMarks<70){
    console.log("Grade D");
}
else if (totalMarks<80){
    console.log("Grade C");
}
else if (totalMarks<90){
    console.log("Grade B");
}
else {
    console.log("Grade A")
}


//   Question 6
for (let x=1;x<=100;x++){
if (x%3===0 && x%5===0){
    console.log("FizzBuzz");
}
else if (x%3===0){
    console.log("Fizz");
}
else if (x%5===0){
    console.log("Buzz")
}
else{
    console.log(x)
}

}

// Question 7

let output = '';

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    output += '* ';
  }
  console.log(output);
  output = '';
}
