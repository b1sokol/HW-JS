//1
const arr = [[1, 2, 3], [4, 5, 6]];
const newArr = arr.map(subArr => subArr.map(num => String(num)));
console.log(newArr);

//2
const arr1 = [{ name: "Igor", age: 20 }, { name: "Oleg", age: 40 }];
const arr2 = arr1.flatMap(obj => Object.entries(obj));


//3
const arr3 = [1, 10, 3, 5, 9];
console.log(arr3.sort((el1, el2) => el1 - el2), arr3);