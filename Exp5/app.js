let person={
    name:"Harshit",
    age: 18,
    city:"Aligarh"
};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.city);
typeof
console.log(typeof(person));

let number =[1,2,3,4,5];
console.log(number[0]);
console.log(number[1]);

let mixedarray=[1,"harshit",true,[1,2,3],{name:"harshit",age:18}];
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);
// to find length of array
console.log(number.length);
//normal function with no parameters
function greet(){
    console.log("Hello, welcome to JavaScript!");

}greet();
//function with parameters
function add(a,b){
    return a+b;
}
console.log(add(5,10));
//arrow function
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(5,10));
//function expression
const divide=function(a,b){
    return a/b;
}
console.log(divide(10,5));
//normal function with expression
let add=function(a,b){
    return a+b;
}
console.log(add(5,10));

//arrow function with no parameters
let sayhi=()=> console.log("hi!");
sayhi();  //hi!

//arrow function with single parameters
let square=x=>x*x;
console.log(square(4));  //16
//arrow function with one parameters
const greetuser=(name)=>{
    console.log(`Hello, ${name}!`);
}
greetuser("Harshit");  //Hello, Harshit!

//map on array
let newarray=[1,2,3,4,5];
let squaredarray=newarray.map((num)=>num*5);
console.log(squaredarray);  //[5, 10, 15, 20, 25]

//filter creates a new array with all elements that pass the test implemented by the provided function.
let evennumbers=[1,2,3,4,5];
let filteredevennumbers=evennumbers.filter(num=>num%2===0);
console.log(filterdevennumbers);  //[2, 4]

let sum=[1,2,3,4,5];
let total=sum.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0);
console.log(total); //15

//map reduce filter on objects student marks
let students=[
    {name:"harshit",marks:90},
    {name:"deepak",marks:80},
    {name:"sachin",marks:85},

];
//map to get marks of all students
let marks=students.map(student=>student.marks);
console.log(marks);  //[90, 80, 85]
//filter to get students with marks greater than 80
let topstudents=students.filter(student=>student.marks>80);
console.log(topstudents);
//reduce to get total marks of all students
let totalmarks=students.reduce((accumulator,student)=>accumulator+student.marks,0);
console.log(totalmarks);  //255'

//mixed object
let mixed object = {
    name:"Harshit",
    age: 18,
    hobbies: {"reading", "traveling", "coding"},
    address: {
        street:"123 main st",
        city:"ALIGARH",
        country:"India"
    },
    greet:function(){
        console.log("Hello!");
        //arrow function in object
        let arrowGreet=()=>{
            let arrowGreet=()=>{
                console.log("hi!");
        
            }
        }
    
    console.log(mixobject.name);  //harshit   
    console.log(mixobject.age);   //18
    console.log(mixobject.hobbies);  //[ 'coding', 'gaming' ]
    console.log(mixobject.hobbies[0]);  //coding
    console.log(mixobject.hobbies[1]);  //gaming
    console.log(mixobject.address);  //{ street: '123 main st', city: 'ALGARH', country: 'India' }
    console.log(mixobject.address.city);  //ALIGARH

    
    //pbject inside array
    let people=[
    {name:"ankit",age:20},
    {name:"deepak",age:22},
    {name:"sachin",age:21}
    ];
    console.log(people[0].name);  //harshit
    console.log(people[1].age);   //22
    console.log(people[2].name);  //sachin

    //array inside object 
    let company={
    name:"Tech Company",
    employees:["Ankit","Deepak","Sachin"]
    };
    console.log(company.name);  //Tech Company
    console.log(company.employees);  //[ 'harshit', 'Sachin' ]
    console.log(company.employees[0]);  //Harshit
    console.log(company.employees[1]);  //Deepak
    console.log(company.employees[2]);  //Sachin
    
}
    }
};
