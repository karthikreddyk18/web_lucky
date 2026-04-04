const names = ["John", "Mike", "Cathy"];

//forEach can be used to loop through array
// names.forEach((value) => {
//   console.log(value);
// });

//map can also be used to loop through array
// names.map((value) => {
//   console.log(value);
// });

//Map can be used to loop and also create new array
const newArray = names.map((value) => {
  return value
});
console.log(newArray)

