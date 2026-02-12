/*let arr1 = [1,2,3];
let arr2 =[...arr1,4,5,6];
console.log(arr2);
let arr3 = arr1;
arr3[0] = 99;
arr2[1] = 88;
console.log("Shallow copy (arr1):", arr1);
console.log("Deep copy (arr2):", arr2);
let emp ={
    id: 1,
    name: "Sumeet",
    age: 10,
}
let details = {...emp, salary: 50000};
console.log(details);
console.log(emp);*/

let arr4 = [1 , 2 ,{id: 1, name: "Sumeet"}];
let arr5 = [...arr4];
arr5[0] = 99;
arr5[2].name = "Rahul";
console.log("Shallow copy (arr4):", arr4);
console.log("Deep copy (arr5):", arr5);
