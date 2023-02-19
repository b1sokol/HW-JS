//1
const arr = [1,6,8,21,56];
let sum = 0;
arr.forEach((number) => {
    sum += number;
});
let avarage = sum / arr.length;
console.log( avarage)
//2
const str = "Hello world random words here";
console.log(str.split(" ").length)
//3
const arr2 = [20, 90, 7, 8, 100];
let max = arr2[0];
let min = arr2[0];
arr2.forEach(element => {
    if (max < element) {
       max = element; 
    }
    if (min > element) {
        min = element;
    }
});
console.log("max", max);
console.log("min", min);