let names = ["John","Mike","Cathy"]
console.log(names)
console.log(names[0])

//Method 1
names.push("Amy")
console.log(names)

//Method 2 - spread operator
names = [...names,"Brian"]
console.log(names)