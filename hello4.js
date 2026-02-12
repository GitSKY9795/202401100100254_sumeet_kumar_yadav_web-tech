const Person = {
    name: "Sumeet",
    age: 10,
    isEmployed: true,
    phno: 1234567890
};

const { name: a, age: b, isEmployed: c, phno: phoneNumber } = Person;
console.log(a);        
console.log(b);        
console.log(c);  
console.log(phoneNumber);
