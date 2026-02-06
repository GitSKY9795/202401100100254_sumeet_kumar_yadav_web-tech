/*let x =10;
console.log(x);

let y= x;
y=20;
console.log(y);
*/
/*let arr = [1,2,3];
let y =arr;
y[0]=10;
console.log(arr[0]);


 class Person{
    constructor(name ,age){
        this.name = name ;
         this.age = age;
    }
 }
  let p1 = new Person("SKY" , 20 );
  console.log(p1.namhie);
  console.log(p1.age);
  */
/*let person ={
    name :"Sumeet",
    age :10,
    isEmployed : true,
    greet : function(){
        console.log("Name : - "+this.name);
        console.log(this);

let inner = ()=>{
    console.log("finded: "+this.name);
    console.log(this);}

inner();}};
person.greet();*/

/*
class Address {
    constructor(city, state, pincode) {
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
}

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const adr = new Address("mugal", "muhhal", 2024);
let p1 = new Person("sumeet", 10, adr);
console.log(p1);*/
let arr =[1,2,3];
let [a,,,,,b]= arr;
console.log(a ,b)
