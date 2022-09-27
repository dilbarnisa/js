//Var//
var firstName = "hello";
var firstName ="world";
console.log(firstName);


//let//
let word = "hello";
let  demo ="world";
console.log(word);
console.log(demo);


//const//
const lastName="hi"
console.log(lastName);


//operators//
//sum//
let x=5;
let y=2;
let z=x+y;
console.log(z);


//string//
let text1 = "hello";
let text2 = "world";
let text3 = text1 + " " + text2
console.log(text3);

//conate string//
let sent = "how are  ";
sent +="you";
console.log(sent);

//add string num//
let a = 5 + 5;
let b = "5" + 5;
let c = "Hello" + 5;
console.log(c);

 //promt//
 let Name=prompt("what is your name");
 alert(Name);

 //data types//
 //string//
 let nam="dil"
 console.log(typeof nam);

 //number//
let value=10;
console.log(typeof value+"10");


//concatenate//
const num1=10;
const num2=30;
console.log(num1+num2);


const first="hello";
const second="world"
console.log(first+" "+second);




let nan="web development"
console.log("welcome to "+nan);


//conditional statement//

let numa =10;
let numb =15;
if(numa>numb){
    console.log("big");
}

else{
    console.log("small");
}
 


//switch statement//
let number = prompt("enter a number b/w 1-3");
switch(number){
    case "1":
        console.log("one");
    break;

    case "2":
        console.log("two");
    break;    

    case "3":
        console.log("three");    
    break;

    default:
    console.log("not found");

}


//function//
function Add(numx,numy){
    let result = numx+numy;
    return result;
    }
     console.log(Add(10,10))
    
    
     

//higher order function//

 function Value(text){
    console.log("welcome"+ text);
    
 }
 function Input(){
    let sample=prompt("What is your name ");
    Value(sample);
 }

 Input()


 //array//
 const cars = [3, "Volvo", "BMW"];

 cars.pop();
 cars.push("swift");
 cars.shift();
 cars.unshift("duster")
console.log(cars);

//object//

const animal={
    type : "cat",
    age : 4,
    color : "white"
}
  console.log(animal);


  //loop//
  //while//

  let j=0;
  while(j<=10){
    console.log(j);
    j++
  }


  //do while//

  let k=0;
  do{
    console.log(k);
    k++
  }
  while(k<10);

   //for//
   for(let i=0;i<=10;i++){
    console.log(i);
  }

  //array by for loop//
  let myArray=["a","b","c",1]
  for(let s=0;s<myArray.length;s++){
  console.log(myArray[s]);
  }


  //object in for//

  let ob= {
    sample1 : "hello",
    sample2 : "world"
    

  }
  for(t in ob){
    console.log(t);
  }





//regular expreesion//
let re1 = new RegExp("abc");
let re2 = /abc/;

//search//
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

//digit//
console.log(/[0123456789]/.test("in 1992"));







//spread operator//
let person = {
  firstName: 'hello',
  lastName: 'world',
  age: 25,
  
};


let job = {
  jobTitle: 'JavaScript Developer',
  location: 'Banglore'
};

let employee = {
  ...person,
  ...job
};

console.log(employee);


//assign operator//
let person1 = {
  firstName: 'hello',
  lastName: 'world',
  age: 25,
  
};


let job1 = {
  jobTitle: 'web  Developer',
  country: 'banglore'
};


let employee1 = Object.assign(person, job);
console.log(employee);





  
 