//Same value being returned
// const products = ["Desktop","Laptop","Mouse","Keyboard","Printer"]
// const newArray = products.map((value)=>{
//     return value
// })
// console.log(newArray)

//Modified value is returned
// const numbers = [5,7,3,2]
// const newArray = numbers.map((value=>{
//     return value + 2
// }))
// console.log(newArray)

//Same value but after filter is returned
// const numbers = [5,7,3,2]
// const newArray = numbers.filter((value)=>{
//     return value > 3
// })
// console.log(newArray)

//First matching value is returned
const rollNumber = [35,37,33,22]
const result = rollNumber.find((value)=>{
    return value === 35
})
console.log(result)