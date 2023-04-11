// //Javascript assignment 2 
// //submitted by Nimra Jawed

// //Question 1

function addition(num) {
    return function (x) {
       return num + x;
    };
  }
let summ = addition(5);
  console.log(summ(2));

// Question 2

function recursiveSearch(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return recursiveSearch(array.slice(1), value);
    }
  }
  let array=[1,3,5,7,9]
  let result1=recursiveSearch(array,5);
  let result2=recursiveSearch(array,8);
console.log(result1)
console.log(result2)

// Question 3
function addParagraph(text) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    document.body.appendChild(p);
  }
  addParagraph("This is a new paragraph.");

//  // Question 4

function addListItem(text) {
    var ul = document.getElementById("myList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
  }
  addListItem("item1")
//   Question 5

  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  let p = document.querySelector("p");
  changeBackgroundColor(p, "red");

  // Question 6

  let student={
    name:"Nimra",
    rollNo:"42101-0000000-0",
    teacher:"Sir Ishaq Bhojani",
    course:"Javascript",
    institute:"SMIT"
  }
  function saveObj(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  saveObj("object", student);

//  Question 7
function getObject(key) {
    let object = localStorage.getItem(key);
    return JSON.parse(object);
  }
  let myObject= getObject("object");
  console.log(myObject);

//  Question 8
function saveObjectProperties(object) {
    for (let key in object) {
      localStorage.setItem(key, object[key]);
    }
  
    let newObject = {};
    for (let key in object) {
      newObject[key] = localStorage.getItem(key);
    }
    return newObject;
  }
  let newObject = saveObjectProperties(student);
  console.log(newObject);