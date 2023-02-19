//1
const obj = {
    city: "Lviv",
    visitors: 150000
};
const output = "City Lviv has 15000000 visitors novadays";
console.log(output)
//2
const data = {
    n1: 10,
    n2: 90,
    n3: 100
  };
  const sum = Object.values(data).reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
  